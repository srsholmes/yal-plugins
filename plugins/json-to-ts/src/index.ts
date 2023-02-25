import { YalPlugin, YalPluginsConfig } from '@yal-app/types';
import jsonToTs from 'json-to-ts';

export const plugin: YalPlugin = async (args) => {
  let result = '';
  try {
    result = jsonToTs(JSON.parse(args.text)).join('\n');
  } catch (e) {
    console.log('jsonToTsFailed', e);
    return;
  }

  return args.setState({
    heading: 'Convert JSON to TS Types',
    action: async ({ item }) => {
      yal.copyToClipboard(item.metadata.code);
    },
    state: [
      {
        name: 'TS Types',
        icon: 'typescript',
        format: 'md',
        description: `
        \`\`\` typescript
${result}
        `,
        metadata: { code: result },
      },
      {
        name: 'Original JSON',
        icon: 'json',
        format: 'md',
        description: `
        \`\`\` json
${JSON.stringify(JSON.parse(args.text), null, 2)}
        `,
        metadata: { code: result },
      },
    ],
  });
};

export const config: YalPluginsConfig = {
  filter: false,
  keywords: ['json-to-ts'],
};

export default plugin;
