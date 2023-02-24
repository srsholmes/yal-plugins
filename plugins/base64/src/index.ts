import { YalPlugin, YalPluginsConfig } from '@yal-app/types';

async function action(args) {
  await yal.copyToClipboard(args.item.name.toString());
  await yal.notification.sendNotification('Copied to clipboard!');
}

export const imageToBase64: YalPlugin = async (args) => {
  const { text, setState } = args;
  if (text.length === 0) {
    setState({
      heading: 'Url to base64:',
      state: [
        {
          name: 'Enter the url of an image to base64 encode',
          icon: 'image',
        },
      ],
      action,
    });
  } else {
    const response = await fetch(text);
    const blob = await response.blob();
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64 = reader.result;
      const result = base64.toString();
      setState({
        heading: `Base64 encoded image for ${text}:`,
        state: [
          {
            name: 'Image successfully encoded, select to copy to clipboard',
            icon: result,
          },
        ],
        action,
      });
    };
  }
};

export const config: YalPluginsConfig = {
  keywords: 'base64',
  filter: false,
};

export default imageToBase64;
