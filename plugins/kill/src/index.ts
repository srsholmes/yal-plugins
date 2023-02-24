import { ResultLineItem, YalPlugin, YalPluginsConfig } from '@yal-app/types';
import { sorter } from './utils';

type Metadata = { cpuUsage: string; processName: string; pid: string };

function getProcesses(stdout: string): ResultLineItem<Metadata>[] {
  return stdout
    .split('\n')
    .map((line) => {
      const trimmed = line.trimStart();
      const parts = trimmed.split(' ');
      const pid = parts[0];
      parts.shift();
      const cpuUsageIndex = parts.findIndex((x) => !isNaN(parseFloat(x)));
      const cpuUsage = parts[cpuUsageIndex];
      const restOfArray = parts.slice(cpuUsageIndex + 1);
      const processName = restOfArray.join('');

      return {
        name: processName,
        icon: processName,
        metadata: { cpuUsage, processName, pid },
      };
    })
    .filter((process) => !process.name.endsWith(' Helper'))
    .map((process) => {
      return {
        ...process,
        icon: 'console',
        title: process.name,
        description: process.name.replace(/\.app\/Contents\/.*$/, '.app'),
      };
    })
    .sort(sorter);
}

export const killPlugin: YalPlugin = async (args) => {
  const kill = await yal.shell.run({
    binary: 'ps',
    args: ['-A', '-o', 'pid', '-o', '%cpu', '-o', 'comm'],
  });

  return args.setState({
    heading: 'Kill process',
    state: getProcesses(kill.stdout),
    action: async ({ item }) => {
      if (item.metadata) {
        await yal.shell.run({
          binary: 'kill',
          args: ['-9', item.metadata.pid],
        });
      }
    },
  });
};

export const config: YalPluginsConfig = {
  keywords: 'kill',
};

export default killPlugin;
