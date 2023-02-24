import { YalPlugin, YalPluginsConfig } from '@yal-app/types';
import icon from './icon.png';
import { classes } from './classes';
import { docs } from './docs';

export const plugin: YalPlugin = (args) => {
  const { setState } = args;

  if (args.text.startsWith('docs')) {
    setState({
      heading: 'Tailwind Documentation',
      state: docs
        .filter((x) => x.title.toLowerCase().includes(args.text.slice(5)))
        .map((x) => {
          return {
            icon,
            name: x.title,
            description: x.url,
            metadata: {
              url: x.url,
            },
          };
        }),
      action: async (actionArgs) => {
        yal.shell.open({ path: actionArgs.item.metadata.url });
      },
    });
    return;
  }

  const results = classes
    .filter(
      (c) => c.selector.includes(args.text) || c.classes.includes(args.text)
    )
    .slice(0, 100);

  setState({
    heading: 'Tailwind',
    state: results.map((x) => {
      const trimmed = x.selector.slice(1, x.selector.length);
      return {
        icon,
        name: trimmed,
        description: x.classes,
        metadata: {
          classes: x.classes,
          selector: trimmed,
        },
      };
    }),
    action: async (actionArgs) => {
      await yal.copyToClipboard(actionArgs.item.metadata.selector);
      await args.utils.setToast({
        type: 'info',
        message: 'Copied to clipboard',
      });
    },
  });
};

export const config: YalPluginsConfig = {
  keywords: ['tw'],
  filter: false,
};

export default plugin;
