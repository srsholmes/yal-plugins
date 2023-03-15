import { YalAppPlugin, YalPluginsConfig } from '@yal-app/types';
import { createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';
import logo from './images/logo.png';

import { render } from 'solid-js/web';

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Hello from Solid JS!
        </h1>
        <div class="w-[200px] h-[200px] m-auto">
          <img class="w-full" src={logo} alt="logo" />
        </div>
        <p class="text-2xl mt-3 text-lg leading-8 text-white">
          The input text (without the keyword is): {state.text}
        </p>
        <p class="mt-3 text-lg leading-8 text-white">The count is: {count()}</p>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(count() + 1)}
        >
          click
        </button>
      </div>
    </div>
  );
}

const [state, setState] = createStore({ text: 'hello world' });

const testSolidApp: YalAppPlugin = (args) => {
  const { appNode } = args;
  setState({ text: args.text });
  if (appNode.children.length === 0) {
    render(() => <App />, appNode);
  }
  return { appNode };
};

export const config: YalPluginsConfig = {
  keywords: 'solid',
  filter: false,
  isApp: true,
};
export default testSolidApp;
