import { YalPlugin, YalPluginsConfig } from '@yal-app/types';
import icon from './icon.png';

export const volume: YalPlugin = (args) => {
  return {
    heading: 'System Volume: ',
    state: {
      name: `Set Volume to ${args.text}`,
      icon: icon,
    },
    action: () => {
      yal.shell.appleScript({
        command: `set volume output volume ${args.text}`,
      });
    },
  };
};

export const config: YalPluginsConfig = {
  keywords: 'vol',
};

export default volume;
