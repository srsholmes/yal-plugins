import { YalPlugin, YalPluginsConfig } from '@yal-app/types';
import Color from 'color';

function createImage(hexColor: string) {
  const canvas = document.createElement('canvas');
  canvas.width = 30;
  canvas.height = 30;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = hexColor;
  ctx.fillRect(0, 0, 30, 30);
  return canvas.toDataURL();
}

export const plugin: YalPlugin = (args) => {
  const { setState, text } = args;
  // search for a number (including decimal points) in text between <> and use it as amount
  const amount = text.match(/<(\d+\.?\d*)>/)?.[1];
  const numAmount = Number(amount);
  // remove the number from the text
  const textWithoutAmount = text.replace(/<(\d+\.?\d*)>/, '');

  try {
    const color = Color(textWithoutAmount.trim());
    const icon = createImage(color.hex());
    const vals = [
      {
        name: color.hex().toString(),
        description: `${text} (HEX)`,
        icon,
      },
      {
        name: color.rgb().toString(),
        description: `${text} (rgb)`,
        icon,
      },
      {
        name: color.hsl().toString(),
        description: `${text} (hsl)`,
        icon,
      },
      {
        name: JSON.stringify(color.object()),
        description: `${text} (object)`,
        icon,
      },
      {
        name: JSON.stringify(color.array()),
        description: `${text} (array)`,
        icon,
      },

      ...(numAmount && numAmount > 0 && !isNaN(numAmount)
        ? [
            {
              name: color.lighten(amount).hex(),
              description: `${text} (lighten)`,
              icon: createImage(color.lighten(numAmount).hex()),
            },
            {
              name: color.darken(numAmount).hex(),
              description: `${text} (darken)`,
              icon: createImage(color.darken(numAmount).hex()),
            },
            {
              name: color.lightness(numAmount).hex(),
              description: `${text} (lightness)`,
              icon: createImage(color.lightness(numAmount).hex()),
            },
            {
              name: color.saturate(numAmount).hex(),
              description: `${text} (saturate)`,
              icon: createImage(color.saturate(numAmount).hex()),
            },
            {
              name: color.desaturate(numAmount).hex(),
              description: `${text} (desaturate)`,
              icon: createImage(color.desaturate(numAmount).hex()),
            },
            {
              name: color.grayscale().hex(),
              description: `${text} (grayscale)`,
              icon: createImage(color.grayscale().hex()),
            },
            {
              name: color.whiten(numAmount).hex(),
              description: `${text} (whiten)`,
              icon: createImage(color.whiten(numAmount).hex()),
            },
            {
              name: color.blacken(numAmount).hex(),
              description: `${text} (blacken)`,
              icon: createImage(color.blacken(numAmount).hex()),
            },
            {
              name: color.fade(numAmount).hex(),
              description: `${text} (fade)`,
              icon: createImage(color.fade(numAmount).hex()),
            },
            {
              name: color.opaquer(numAmount).hex(),
              description: `${text} (opaquer)`,
              icon: createImage(color.opaquer(numAmount).hex()),
            },
          ]
        : []),
      {
        name: color.negate().hex().toString(),
        description: `${text} (negated)`,
        icon: createImage(color.negate().hex()),
      },
    ];

    setState({
      heading: 'Color Convert',
      state: vals,
      action: async (args) => {
        await yal.copyToClipboard(args.item.name as string);
        await yal.notification.sendNotification('Copied to clipboard!');
      },
    });
  } catch (e) {}
};

export const config: YalPluginsConfig = {
  filter: false,
};

export default plugin;
