import { YalAppPlugin, YalPluginsConfig } from '@yal-app/types';
import { createEffect, createSignal } from 'solid-js';
import { render } from 'solid-js/web';
import { setState } from './state';

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
  const [highlightedJSCode, setHighlightedJSCode] = createSignal(null);
  const [highlightedTSCode, setHighlightedTSCode] = createSignal(null);

  let tsCodeDiv;
  async function handleInput(e) {
    console.log('e', e);
    setCode(e.target.innerText);
    // tsCodeDiv.innerText = e.target.innerText;
    // Syntax Highlight
    window.yal.Prism.highlightElement(tsCodeDiv);
  }

  // createEffect(() => {
  //   const TShtml = window.yal.Prism.highlight(
  //     code(),
  //     window.yal.Prism.languages.js,
  //     'javascript'
  //   );
  //   setHighlightedTSCode(TShtml);
  // });

  createEffect(async () => {
    const res = await compileCode(code());
    const JShtml = window.yal.Prism.highlight(
      res,
      window.yal.Prism.languages.js,
      'javascript'
    );

    setHighlightedJSCode(JShtml);
  });

  return (
    <div class="mx-auto text-white px-10">
      <div>
        <h1 class="text-2xl font-bold tracking-tight text-white sm:text-6xl mb-10">
          Convert TS to JS
        </h1>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              TypeScript:
            </label>
            <div class="relative">
              <pre
                onInput={handleInput}
                contentEditable
                // ref={tsCodeDiv}
                aria-hidden="true"
                class="z-10 absolute top-0 left-0 h-[400px] w-full"
              >
                <code ref={tsCodeDiv} class="language-typescript">{code()}</code>
              </pre>
            </div>
          </div>
          <div>
            <label
              for="compiled"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              JavaScript:
            </label>
            <div class="block overflow-x-auto p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <pre>
                <code
                  class="language-javascript"
                  innerHTML={highlightedJSCode()}
                ></code>
              </pre>
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
  keywords: 'convert',
  filter: false,
  isApp: true,
};
export default testSolidApp;
