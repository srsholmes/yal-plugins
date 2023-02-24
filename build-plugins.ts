import fs from 'fs';
import esbuild from 'esbuild';
import path from 'path';
import { mkdir, readdir, copyFile } from 'fs/promises';
const { solidPlugin } = require('esbuild-plugin-solid');

const home = require('os').homedir();

const PLUGINS_INSTALL_DIR = path.join(home, '.yal', 'plugins');

// Remove the PLUGINS_DIR and remake it
if (fs.existsSync(PLUGINS_INSTALL_DIR)) {
  fs.rmdirSync(PLUGINS_INSTALL_DIR, { recursive: true });
  fs.mkdirSync(PLUGINS_INSTALL_DIR);
}

if (!fs.existsSync('./dist/')) {
  fs.mkdirSync('./dist/');
}

const PLUGINS_SRC_DIR = './plugins/';

function getEntryPoints({ includeSolidJS }: { includeSolidJS: boolean }) {
  // get args from command line
  const args = process.argv.slice(2);
  // console.log({ args });
  const userArgs = args.filter((x) => x !== '--watch');
  const userHasSpecifiedPlugin = userArgs.length > 0;
  // console.log(userHasSpecifiedPlugin);
  // if there are userArgs, use them as entry points
  if (userHasSpecifiedPlugin) {
    console.log(
      `User has specified plugins to build. Looking for these plugins: ${userArgs}}`
    );
  }

  const arr = fs
    .readdirSync(PLUGINS_SRC_DIR)
    .filter((x) => x !== '.DS_Store')
    .filter((x) => (userHasSpecifiedPlugin ? args.includes(x) : true))
    .map((x) => path.resolve(process.cwd(), PLUGINS_SRC_DIR, x))
    .filter((x) => {
      const packageJson = fs.readFileSync(x + '/package.json', 'utf8');
      const packageJsonParsed = JSON.parse(packageJson);
      // console.log(packageJsonParsed.dependencies?.['solid-js']);
      if (packageJsonParsed.dependencies?.['solid-js']) {
        return includeSolidJS ? true : false;
      }
      return includeSolidJS ? false : true;
    })
    .map((path) => {
      const contents = fs.readdirSync(path + '/src');
      console.log({ contents });
      if (contents.includes('index.js')) {
        return path + '/src/index.js';
      }
      if (contents.includes('index.ts')) {
        return path + '/src/index.ts';
      }
      if (contents.includes('index.tsx')) {
        return path + '/src/index.tsx';
      }
      if (contents.includes('index.jsx')) {
        return path + '/src/index.jsx';
      }
      console.log('No index.js or index.ts or index.jsx or index.tsx found in ' + path);
    });

  console.log({ arr });
  return arr;
}

async function build({
  pluginFiles,
  includeSolidJS,
}: {
  pluginFiles: string[];
  includeSolidJS: boolean;
}) {
  return esbuild
    .build({
      entryPoints: pluginFiles,
      mainFields: ['svelte', 'browser', 'module', 'main'],
      outdir: './dist/',
      format: 'esm',
      minify: false, // so the resulting code is easier to understand
      bundle: true,
      splitting: false,
      allowOverwrite: true,
      loader: {
        '.png': 'dataurl',
        '.jpg': 'dataurl',
        '.svg': 'dataurl',
      },
      sourcemap: 'external',
      plugins: includeSolidJS ? [solidPlugin({ })] : [],
      watch:
        //  if args contain --watch
        process.argv.includes('--watch')
          ? {
              onRebuild(error, result) {
                if (error) {
                  console.error('watch build failed:', error);
                } else {
                  console.log('watch build succeeded:', result);
                  copyDir('./dist', PLUGINS_INSTALL_DIR, true).then(() =>
                    console.log('Plugins installed 🎉')
                  );
                }
              },
            }
          : false,
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}

(async () => {
  console.log('Building plugins...');
  const pluginFiles = getEntryPoints({ includeSolidJS: false });
  console.log('pluginFiles (No SolidJS dependency)', pluginFiles);
  await build({ pluginFiles, includeSolidJS: false });
  console.log('Plugins compiled (no SolidJS) 🎉');
  const pluginFilesWithSolidJS = getEntryPoints({ includeSolidJS: true });
  console.log('pluginFiles (SolidJS dependencies)', pluginFilesWithSolidJS);
  await build({ pluginFiles: pluginFilesWithSolidJS, includeSolidJS: true });
  console.log('SolidJS Plugins compiled 🎉');
  await copyDir(PLUGINS_SRC_DIR, './dist/');
  console.log('Other files copied 🎉');
  await copyDir('./dist', PLUGINS_INSTALL_DIR, true);
  console.log('Plugins installed 🎉');
  copyYarnLockAndInstallDeps();
})();

async function copyDir(src, dest, copySrcDirectory = false) {
  await mkdir(dest, { recursive: true });
  let entries = await readdir(src, { withFileTypes: true });
  for (let entry of entries) {
    if (entry.name === '.DS_Store') continue;
    if (entry.name === 'node_modules') continue;
    if (entry.name === 'src' && !copySrcDirectory) continue;
    let srcPath = path.join(src, entry.name);
    let destPath = path.join(dest, entry.name);

    entry.isDirectory()
      ? await copyDir(srcPath, destPath, copySrcDirectory)
      : await copyFile(srcPath, destPath);
  }
}

function copyYarnLockAndInstallDeps() {
  // const src = path.resolve(process.cwd(), './yarn.lock');
  // const dest = path.resolve(process.cwd(), `${PLUGINS_INSTALL_DIR}/yarn.lock`);

  // try {
  //   fs.copyFileSync(src, dest);
  // } catch (err) {
  //   console.log(err);
  //   console.log(`maybe have been an error copying: ${src} to ${dest}`);
  // }

  const packageJsonTemplate = `
  {
    "name": "@package/plugins",
    "version": "0.0.1",
    "workspaces": {
      "packages": [
        "plugins/*"
      ]
    },
    "private": true
  }`;

  // Create package.json
  fs.writeFileSync(
    path.resolve(process.cwd(), `${PLUGINS_INSTALL_DIR}/package.json`),
    packageJsonTemplate
  );

  // Install dependencies
  const { exec } = require('child_process');
  exec(
    'yarn install',
    { cwd: path.join(home, '.yal') },
    (err, stdout, stderr) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(stdout);
    }
  );
}
