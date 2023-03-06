import { YalAppPlugin, YalPluginsConfig } from '@yal-app/types';
import Test from './index.svelte';
import { state } from './state';

export const svelteExamplePlugin: YalAppPlugin = (args) => {
  const { appNode } = args;
  state.set(args.text);
  if (appNode?.children.length === 0) {
    new Test({ target: appNode });
  }
  return { appNode };
};

export const config: YalPluginsConfig = {
  keywords: 'svelte',
  filter: false,
  isApp: true,
};

export default svelteExamplePlugin;
