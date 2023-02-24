import { YalPlugin, YalPluginsConfig } from '@yal-app/types';

export const bookmarks: YalPlugin = async (args) => {
  const homeDir = await yal.path.homeDir();

  const file = await yal.fs.readTextFile(
    `${homeDir}/Library/Application Support/Google/Chrome/Default/Bookmarks`
  );
  const res: { name: string; url: string; [key: string]: unknown }[] =
    JSON.parse(file).roots.bookmark_bar.children;

  args.setState({
    heading: 'Bookmarks: ',
    state: res.map(({ name, url }) => {
      return {
        name,
        icon: 'chrome',
        metadata: {
          url: url,
        },
      };
    }),
    action: ({ item }) => {
      yal.shell.open({ path: item.metadata.url });
    },
  });
};

export const config: YalPluginsConfig = {
  keywords: ['book'],
};

export default bookmarks;
