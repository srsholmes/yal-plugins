import { YalPlugin, YalPluginsConfig } from '@yal-app/types';
import { SITES_ARRAY } from './websites';

export const webSearch: YalPlugin = (args) => {
  if (args.text === '') return;
  const query = args.text.replace(' ', '+');
  return {
    heading: 'Search the web for:',
    state: SITES_ARRAY.filter((x) => x.metadata.enabled === true).map(
      (obj) => ({
        ...obj,
        name: `${obj.name}`,
        description: `${obj.name} for ${args.text}`,
        metadata: { url: `${obj?.metadata?.url?.replace('{query}', query)}` },
      })
    ),
    action: ({ item }) => {
      yal.shell.open({ path: item.metadata.url });
    },
  };
};

export const config: YalPluginsConfig = {
  filter: false,
  keywords: ['web'],
};

export default webSearch;
