import { MdnApiResponse } from './types';
import { YalPlugin, YalPluginsConfig } from '@yal-app/types';

async function fetchData({ text }: { text: string }) {
  return yal.http.fetch<MdnApiResponse>(
    `https://developer.mozilla.org/api/v1/search?q=${text}`,
    {
      responseType: 1,
      method: 'GET',
    }
  );
}

export const useMdnSearch: YalPlugin = async (args) => {
  const { text } = args;
  const res = await fetchData({ text });
  if (res?.ok) {
    args.setState({
      heading: 'Search MDN for:',
      state: res?.data?.documents?.map?.((x) => {
        return {
          name: x.title,
          icon: 'mdn',
          metadata: {
            url: `https://developer.mozilla.org/${x.mdn_url}`,
          },
        };
      }),
      action: ({ item }) => {
        yal.shell.open({ path: item.metadata.url });
      },
    });
  }
};

export const config: YalPluginsConfig = {
  filter: false,
  keywords: 'mdn',
  debounce: true,
};

export default useMdnSearch;
