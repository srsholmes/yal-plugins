import { YalPlugin, YalPluginsConfig } from '@yal-app/types';

export const pluginTester: YalPlugin = (args) => {
  args.setState({
    heading: 'Node.js Example',
    state: [
      {
        name: 'This is an example of how you can call a Node.JS Application',
        description: 'Click this result to run the Node.JS Application',
      },
    ],
    action: async () => {
      const res = await yal.shell.run({
        binary: 'node',
        args: [`${args.pluginPath}/scripts/test.js`, ...args.text.split(' ')],
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
    },
  });
};

export const config: YalPluginsConfig = {
  keywords: ['node'],
  filter: false,
  keepOpen: true,
};

export default pluginTester;
