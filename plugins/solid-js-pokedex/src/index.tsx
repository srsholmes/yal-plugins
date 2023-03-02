import { PluginArgs, YalAppPlugin, YalPluginsConfig } from '@yal-app/types';
import { render } from 'solid-js/web';
import Pokedex from './Components/Pokedex';
import { setText } from './state';

function App(props: { utils: PluginArgs['utils'] }) {
  return (
    <div class="mx-auto max-w-2xl py-10">
      <Pokedex utils={props.utils} />
    </div>
  );
}

const testSolidApp: YalAppPlugin = (args) => {
  const { appNode } = args;
  if (args.text !== '') {
    setText(args.text);
  }
  if (appNode.children.length === 0) {
    render(() => <App utils={args.utils} />, appNode);
  }
  return { appNode };
};

export const config: YalPluginsConfig = {
  keywords: 'pokemon',
  filter: false,
  debounce: true,
  isApp: true,
};

export default testSolidApp;
