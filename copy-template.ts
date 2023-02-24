import fs from 'fs';
import { copyFile, mkdir, readdir } from 'fs/promises';
import path from 'path';

const PLUGINS_SRC_DIR = './plugins/';

const arr = fs.readdirSync(PLUGINS_SRC_DIR).filter((x) => x !== '.DS_Store');

(async () => {
  for (let plugin of arr) {
    const pluginPath = path.join(PLUGINS_SRC_DIR, plugin);
    const packageJson = require(path.join(
      process.cwd(),
      pluginPath,
      'package.json'
    ));
    const pluginTemplatePath = path.join(process.cwd(), 'template');
    const readme = fs.readFileSync(pluginTemplatePath + '/README.md', 'utf8');
    const newReadme = readme.replaceAll(
      `<plugin-name>`,
      packageJson.name.replace('@yal-app/plugin-', '')
    );
    // check to see if readme exists
    if (fs.existsSync(pluginPath + '/README.md')) {
      console.log('README.md already exists, skipping....', pluginPath);
      continue;
    } else {
      await copyDir(pluginTemplatePath, pluginPath);
      fs.writeFileSync(pluginPath + '/README.md', newReadme);
    }
  }
})();

async function copyDir(src, dest) {
  await mkdir(dest, { recursive: true });
  let entries = await readdir(src, { withFileTypes: true });
  for (let entry of entries) {
    if (entry.name === '.DS_Store') continue;
    if (entry.name === 'node_modules') continue;

    let srcPath = path.join(src, entry.name);
    let destPath = path.join(dest, entry.name);

    entry.isDirectory()
      ? await copyDir(srcPath, destPath)
      : await copyFile(srcPath, destPath);
  }
}
