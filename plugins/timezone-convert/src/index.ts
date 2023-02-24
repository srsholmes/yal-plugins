import { YalPlugin, YalPluginsConfig } from '@yal-app/types';

const emojiTimes = [
  null,
  '🕐',
  '🕑',
  '🕒',
  '🕓',
  '🕔',
  '🕕',
  '🕖',
  '🕗',
  '🕘',
  '🕙',
  '🕚',
  '🕛',
];

export const timezonesPlugin: YalPlugin = (args) => {
  const date = new Date();
  return args.setState({
    heading: 'Timezone Convert',
    action: ({ item }) => {
      yal.copyToClipboard(item.description);
    },
    // @ts-ignore
    state: Intl.supportedValuesOf('timeZone').map((timeZone) => {
      const descriptionDate = `${date.toLocaleString('en-US', {
        timeZone: `${timeZone}`,
      })}`;

      const iconIndex = new Date(descriptionDate).getHours() % 12 || 12;

      return {
        name: `${timeZone}`.replace('/', ' / '),
        description: descriptionDate,
        icon: emojiTimes[iconIndex],
      };
    }),
  });
};

export const config: YalPluginsConfig = {
  keywords: 'timezones',
};

export default timezonesPlugin;
