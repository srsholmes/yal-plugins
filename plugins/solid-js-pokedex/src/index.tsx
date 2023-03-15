import { PluginArgs, YalAppPlugin, YalPluginsConfig } from '@yal-app/types';
import { render } from 'solid-js/web';
import Pokedex from './Components/Pokedex';
import { setText, setUtils } from './state';

window.yal.WebFont.load({
  google: {
    families: ['Ultra'],
  },
});

const solidPokedexApp: YalAppPlugin = (args) => {
  const { appNode } = args;
  if (args.text !== '') {
    setText(args.text);
    setUtils(args.utils);
  }
  if (appNode.children.length === 0) {
    render(() => <Pokedex />, appNode);
  }
  return { appNode };
};

export const config: YalPluginsConfig = {
  keywords: 'pokemon',
  filter: false,
  debounce: true,
  keepOpen: true,
  isApp: true,
};

export default solidPokedexApp;
