import { YalPlugin, YalPluginsConfig } from '@yal-app/types';

export const pluginTester: YalPlugin = async (args) => {
  const { setState } = args;
  const res = await yal.http.fetch<string>(
    'https://raw.githubusercontent.com/srsholmes/yal/develop/README.md',
    {
      responseType: yal.http.ResponseType.Text,
      method: 'GET',
    }
  );

  setState({
    heading: '',
    state: [
      {
        description: res.data,
        format: 'md',
      },
    ],
  });
};

export const config: YalPluginsConfig = {
  keywords: ['markdown'],
  filter: false,
  keepOpen: true,
};

export default pluginTester;
