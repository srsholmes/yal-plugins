import { YalAppPlugin, YalPluginsConfig } from '@yal-app/types';
import { haha } from './fun';
import Test from './index.svelte';
import { state } from './state';

let val = '';

export const svelteExamplePlugin: YalAppPlugin = (args) => {
  const { appNode } = args;
  state.set(args.text);
  if (appNode.children.length === 0) {
    new Test({ target: appNode });
  }
  console.log(haha());
  return { appNode };
};

export const config: YalPluginsConfig = {
  keywords: 'svelte',
  filter: false,
  isApp: true,
};

export default svelteExamplePlugin;
