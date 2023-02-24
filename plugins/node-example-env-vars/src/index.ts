import { YalPlugin, YalPluginsConfig } from '@yal-app/types';

export const pluginTester: YalPlugin = (args) => {
  const { setState } = args;
  setState({
    heading: 'Node.js Environment Variables Example',
    state: [
      {
        name: 'This is an example of how you can call a Node.JS Application, with environment variables',
        description: 'Click this result to run the Node.JS Application',
      },
    ],
    action: async (actionArgs) => {
      const res = await yal.shell.run({
        binary: 'node',
        args: [`${args.pluginPath}/scripts/test.js`],
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
  keywords: ['node-env'],
  filter: false,
  keepOpen: true,
};

export default pluginTester;
