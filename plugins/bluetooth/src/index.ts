import {
  Action,
  PluginArgs,
  YalPlugin,
  YalPluginsConfig,
} from '@yal-app/types';

export type BluetoothPairedItem = {
  connected: boolean;
  address: string;
  recentaccessdate: string;
  name: string;
  favourite: boolean;
  paired: boolean;
};
export type BluetoothPairedItems = BluetoothPairedItem[];

let BLUEUTIL_PATH = '';

async function bluetoothPower(power: boolean) {
  await yal.shell.shellCommand({
    path: BLUEUTIL_PATH,
    args: ['--power', power ? '1' : '0'],
  });
}

async function getBluetoothStatus(): Promise<boolean> {
  const { stdout } = await yal.shell.shellCommand({
    path: BLUEUTIL_PATH,
    args: ['--power'],
  });
  return stdout.trim() === '1';
}

async function getPairedDevices(): Promise<BluetoothPairedItems> {
  const command = await yal.shell.shellCommand({
    path: BLUEUTIL_PATH,
    args: ['--paired', '--format', 'json'],
  });

  return JSON.parse(command.stdout);
}

async function updateResults(setState: PluginArgs['setState']) {
  const bluetoothStatus = await getBluetoothStatus();
  const pairedDevices = await getPairedDevices();
  setState({
    heading: 'Bluetooth',
    state: [
      {
        name: `Turn Bluetooth ${bluetoothStatus ? 'off' : 'on'}`,
        icon: 'bluetooth',
      },
      ...pairedDevices.map((item) => {
        return {
          name: `${item.connected ? 'Disconnect' : 'Connect'} ${item.name}`,
          icon: 'bluetooth',
          metadata: {
            address: item.address,
            isConnected: item.connected,
          },
        };
      }),
    ],
    action: async ({ item, setState }) => {
      if (item.metadata) {
        const bluetoothOn = await getBluetoothStatus();
        if (!bluetoothOn) {
          await bluetoothPower(true);
          // sleep for 500ms
          await new Promise((resolve) => setTimeout(resolve, 500));
        }

        await yal.shell.shellCommand({
          path: BLUEUTIL_PATH,
          args: [
            item.metadata.isConnected ? '--disconnect' : '--connect',
            item.metadata.address,
          ],
        });
      } else {
        await bluetoothPower(item.name === 'Turn Bluetooth on');
      }
      await updateResults(setState);
    },
  });
}

export const useBluetooth: YalPlugin = async (args) => {
  BLUEUTIL_PATH = `${args.pluginPath}/blueutil`;
  await updateResults(args.setState);
};

export const config: YalPluginsConfig = {
  keywords: ['bt', 'bluetooth'],
};

export default useBluetooth;
