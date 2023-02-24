import { YalPlugin, YalPluginsConfig } from '@yal-app/types';
import { ALL_CARDS } from './cards';
import icon from './icon.png';

export const stripTestCardsPlugin: YalPlugin = (args) => {
  return args.setState({
    heading: 'Stripe Test Cards',
    action: ({ item }) => {
      yal.copyToClipboard(item.description);
    },
    state: ALL_CARDS.map((x) => {
      return {
        ...x,
        icon,
      };
    }),
  });
};

export const config: YalPluginsConfig = {
  keywords: 'stripe',
  filter: true,
};

export default stripTestCardsPlugin;
