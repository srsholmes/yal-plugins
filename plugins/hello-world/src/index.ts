import { YalPlugin, YalPluginsConfig } from '@yal-app/types';

export const plugin: YalPlugin = (args) => {
  args.setState({
    heading: 'Hello World',
    state: [
      {
        name: 'This is the first result',
        description: 'This is the first result description',
        metadata: {
          another: 'https://yal.app',
          toto: 11234,
        },
      },
      {
        name: 'This is the second result',
        description: 'This is the second result description',
        metadata: {
          url: 'https://yal.app',
          toto: 11234,
        },
      },
    ],
    action: (actionArgs) => {
      console.log('actionArgs', actionArgs.item.metadata);
      args.utils.setToast({
        type: 'info',
        message: `You clicked on ${actionArgs.item.name}`,
      });
      console.log(actionArgs.item.description);
    },
  });
};

export const config: YalPluginsConfig = {
  keywords: ['hello'],
  keepOpen: true,
};

export default plugin;
