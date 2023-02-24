import { YalPlugin, YalPluginsConfig } from '@yal-app/types';

export const pluginTester: YalPlugin = (args) => {
  const { setState } = args;
  setState({
    heading: 'Node.js Typescript Example',
    state: [
      {
        name: 'This is an example of how you can call a Typescript Node.JS Application using TSX',
        description: 'Click this result to run the Node.JS Application',
      },
    ],
    action: async (actionArgs) => {
      const toast = args.utils.setToast({
        message: 'Running Typescript Node.js Application',
        type: 'loading',
      });
      const res = await yal.shell.run({
        binary: 'tsx',
        args: [`${args.pluginPath}/scripts/test.ts`, ...args.text.split(' ')],
      });
      args.setState({
        heading: 'Node.js Example',
        state: [
          {
            name: 'Result',
            description: res.stdout,
          },
        ],
      });
      // toast.dismiss();
    },
  });
};

export const config: YalPluginsConfig = {
  keywords: ['node-ts'],
  filter: false,
  keepOpen: true,
};

export default pluginTester;
