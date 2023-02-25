import { YalAppPlugin, YalPluginsConfig } from '@yal-app/types';
import { createSignal } from 'solid-js';
import { render } from 'solid-js/web';
import { setState } from './state';

let pluginPath = '';

async function compileCode(code: string) {
  console.log('compiling code', pluginPath);
  const res = await yal.shell.run({
    binary: 'tsx',
    args: [pluginPath, code],
  });
  return res.stdout;
}

function App() {
  const [code, setCode] = createSignal(null);

  async function handleInput(e) {
    const compiled = await compileCode(e.target.value);
    setCode(compiled);
  }

  return (
    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-white">
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-10">
          Convert TS to JS
        </h1>
        <div class="grid grid-cols-2">
          <div>
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              TypeScript:
            </label>
            <textarea
              onInput={handleInput}
              autocorrect="off"
              spellcheck={false}
              autocomplete="off"
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Paste your TypeScript code here..."
            ></textarea>
          </div>
          <div>
            <label
              for="compiled"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              JavaScript:
            </label>
            <div class="prose">
              <code>{code()}</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const testSolidApp: YalAppPlugin = (args) => {
  const { appNode } = args;
  if (!pluginPath) {
    pluginPath = `${args.pluginPath}/scripts/script.ts`;
  }
  setState({ text: args.text });
  if (appNode.children.length === 0) {
    render(() => <App />, appNode);
  }
  return { appNode };
};

export const config: YalPluginsConfig = {
  keywords: 'copy',
  filter: false,
  isApp: true,
};
export default testSolidApp;
