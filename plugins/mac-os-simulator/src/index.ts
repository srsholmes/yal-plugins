import { ResultLineItem, YalPlugin, YalPluginsConfig } from '@yal-app/types';

interface Device {
  availabilityError: string;
  dataPath: string;
  dataPathSize: number;
  logPath: string;
  udid: string;
  isAvailable: boolean;
  deviceTypeIdentifier: string;
  state: string;
  name: string;
}

async function getSimulators() {
  const res = await yal.shell.run({
    binary: 'xcrun',
    args: ['simctl', `list`, '--json'],
  });

  const json = JSON.parse(res.stdout);
  const runTimes: {
    [key: string]: Array<Device>;
  } = json.devices;
  const availableSimulators: ResultLineItem<{ udid: string }>[] = [];
  for (const runTime in runTimes) {
    for (const device of runTimes[runTime]) {
      if (device.isAvailable) {
        availableSimulators.push({
          name: device.name,
          description: `${device.name} - ${runTime
            .split('.')
            .pop()
            .replaceAll('-', '.')}`,
          icon: 'apple',
          metadata: {
            udid: device.udid,
          },
        });
      }
    }
  }

  return availableSimulators;
}

export const simulators: YalPlugin = async (args) => {
  const state = await getSimulators();
  return args.setState({
    heading: 'Simulators',
    state: state,
    action: async (result) => {
      await yal.shell.run({
        binary: 'open',
        args: [
          '-a',
          `Simulator`,
          `--args`,
          `-CurrentDeviceUDID`,
          result.item.metadata.udid,
        ],
      });
    },
  });
};

export const config: YalPluginsConfig = {
  keywords: 'sims',
};

export default simulators;
