import type { AppEntry, YalPlugin, YalPluginsConfig } from '@yal-app/types';

type MenuItem = {
  title: string;
  subtitle: string;
  arg: string;
  uid: string;
  icon: {
    type: string;
    path: string;
  };
};

type MenuItems = { items: MenuItem[] };

// The way to get this working is.....
// Delete the permission for yal from the Accessibility settings
// Try and use the plugin. the option will appear in the accessibility settings in an off state.
// Turn it on and it will work on the next try.
// TODO: test if the plugin works when the permission is granted before the plugin is installed.

// This has to be done this way as the sidecar approach doesn't work with accessibility plugins.
const MENU_BAR_PATH = `${yal.config.pluginsPath}/menu-bar/menu`;

async function getMenuBarItems({
  apps,
  setToast,
}: {
  apps: AppEntry[];
  setToast: (args: any) => void;
}) {
  try {
    const command = await yal.shell.run({
      binary: MENU_BAR_PATH,
    });

    const menuBar: MenuItems = JSON.parse(command.stdout);
    const appsNameList = apps.map((appEntry) => {
      return Object.keys(appEntry)[0].split('/').pop();
    });
    const appName = menuBar.items[0].icon.path.split('/').pop();
    const index = appsNameList.indexOf(appName);
    const icon = index > 0 ? Object.values(apps[index])?.[0].icon : null;

    const state = menuBar.items.map((x) => {
      return {
        name: x.title,
        description: x.subtitle,
        icon,
        metadata: {
          app: appName.replace('.app', ''),
          arg: x.arg,
          uid: x.uid,
        },
      };
    });
    return state;
  } catch (err) {
    setToast({
      message:
        'Error getting menu bar items, enable the accessibilitym permission for yal',
      type: 'error',
    });
    return [];
  }
}

export const getMenuBar: YalPlugin = async (args) => {
  if (args.text === '') {
    args.setState({
      heading: 'Menu Items',
      action: () => {},
      state: [],
    });
  }
  const items = await getMenuBarItems({
    apps: args.system.apps,
    setToast: args.utils.setToast,
  });
  const heading = items[0]?.metadata.app;
  args.setState({
    heading: heading,
    state: items,
    action: async (result) => {
      await yal.shell.run({
        binary: MENU_BAR_PATH,
        args: ['-click', result.item.metadata.arg],
      });
    },
  });
};

export const config: YalPluginsConfig = {
  keywords: ['m', 'menu'],
};

export default getMenuBar;
