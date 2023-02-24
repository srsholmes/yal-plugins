import { data } from './data';
import { matchSorter } from 'match-sorter';
import { YalPlugin, YalPluginsConfig } from '@yal-app/types';

function toTitleCase(str: string) {
  return str
    .replace(/_/g, ' ')
    .replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
}

const matcherData = Object.entries(data).map((x) => {
  const [key, val] = x;
  return {
    icon: key,
    desc: val,
  };
});

export const emoji: YalPlugin = (args) => {
  const searchResults = matchSorter(matcherData, args.text, { keys: ['desc'] });
  return {
    heading: 'Emojis:',
    state: searchResults
      .map((x) => ({
        name: toTitleCase(x.desc[0]),
        icon: x.icon,
        description: x.desc.map(toTitleCase).join(', '),
      }))
      .slice(0, 50),
    action: async (args) => {
      await yal.copyToClipboard(args.item.icon);
      await yal.notification.sendNotification('Copied to clipboard!');
    },
  };
};

export const config: YalPluginsConfig = {
  keywords: 'em',
};

export default emoji;
