import { Parser } from 'expr-eval';
import { YalPlugin, YalPluginsConfig } from '@yal-app/types';
import icon from './icon.png';

const parser = new Parser();

function evaluateExpression(expr: string) {
  if (!expr) return false;
  try {
    return parser.evaluate(expr);
  } catch (err) {
    return false;
  }
}

export const calculator: YalPlugin = (args) => {
  const result = evaluateExpression(args.text);
  return {
    heading: 'Calculator',
    state: result
      ? [
          {
            name: `${args.text} = ${result}`,
            icon,
            action: async () => {
              await yal.copyToClipboard(result.toString());
              await yal.notification.sendNotification('Copied to clipboard!');
            },
          },
        ]
      : [],
  };
};

export const config: YalPluginsConfig = {
  keepOpen: true,
};

export default calculator;
