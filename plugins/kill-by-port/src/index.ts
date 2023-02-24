import { YalPlugin, YalPluginsConfig } from '@yal-app/types';
import ICON from './terminal.png';

const killByPort: YalPlugin = async (args) => {
  const { setState, text } = args;
  const cmd = await yal.shell.run({
    binary: `lsof`,
    args: ['-nP', `-i:${text}`],
  });
  const res = cmd.stdout.split('\n');
  const parts = res[1].split(' ').filter(Boolean);
  setState({
    state: [
      {
        name: parts[0],
        icon: ICON,
        metadata: { pid: parts[1], port: parts[0] },
      },
    ],
    heading: 'Kill by port',
    action: async (result) => {
      setState({
        heading: 'Kill by port',
        state: [
          {
            name: `Killing process ${result.item.metadata.port}....`,
            icon: ICON,
          },
        ],
      });

      await yal.shell.run({
        binary: 'kill',
        args: ['-9', result.item.metadata.pid],
      });
    },
  });
};

export const config: YalPluginsConfig = {
  keywords: 'kp',
  filter: false,
};

export default killByPort;
