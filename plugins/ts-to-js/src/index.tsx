import { CodeInput } from '@srsholmes/solid-code-input';
import { YalAppPlugin, YalPluginsConfig } from '@yal-app/types';
import { createSignal, onMount } from 'solid-js';
import { render } from 'solid-js/web';
import { setState } from './state';
import('prismjs/components/prism-typescript');

let pluginPath = '';

async function compileCode(code: string) {
  const res = await yal.shell.run({
    binary: 'tsx',
    args: [pluginPath, code],
  });
  return res.stdout;
}

function App() {
  const [code, setCode] = createSignal("const hello = (a: number) => 'hello';");
  const [compiledCode, setCompiledCode] = createSignal(null);

  async function onChange(val) {
    setCode(val);
    const res = await compileCode(code());
    setCompiledCode(res);
  }

  return (
    <div class="mx-auto text-white px-10">
      <div>
        <h1 class="text-2xl font-bold tracking-tight text-white sm:text-6xl mb-10">
          Convert TS to JS
        </h1>
        <div class="grid grid-cols-2 gap-4">
          <div class="pb-10">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              TypeScript:
            </label>

            <CodeInput
              autoHeight={true}
              resize="none"
              prismJS={window.yal.Prism}
              onChange={onChange}
              value={code()}
              language="typescript"
            />
          </div>
          <div class="pb-10">
            <label
              for="compiled"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              JavaScript:
            </label>

            <CodeInput
              autoHeight={true}
              resize="none"
              prismJS={window.yal.Prism}
              onChange={() => {}}
              value={compiledCode()}
              language="javascript"
            />
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
  keywords: 'convert',
  filter: false,
  isApp: true,
};
export default testSolidApp;
