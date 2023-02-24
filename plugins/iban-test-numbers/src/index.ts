import { YalPlugin, YalPluginsConfig } from '@yal-app/types';
import icon from './icon.png';

const TEST_IBANS = [
  {
    description: 'GB33BUKB20201555555555',
    name: 'Valid IBAN, length, checksum, bank code, account and structure',
  },
  {
    description: 'GB94BARC10201530093459',
    name: 'Valid IBAN, bank code not found (bank cannot be identified): Valid length, checksum, bank code, account and structure',
  },
  {
    description: 'GB94BARC20201530093459',
    name: '	Invalid IBAN check digits MOD-97-10 as per ISO/IEC 7064:2003',
  },
  {
    description: 'GB96BARC202015300934591',
    name: 'Invalid IBAN length must be "X" characters long!',
  },
  { description: 'GB02BARC20201530093451', name: 'Invalid account number' },
  { description: 'GB68CITI18500483515538', name: 'Invalid account number' },
  {
    description: 'GB24BARC20201630093459',
    name: 'Bank Code not found and invalid account',
  },
  { description: 'GB12BARC20201530093A59', name: 'Invalid account structure' },
  {
    description: 'GB78BARCO0201530093459',
    name: 'Bank Code not found and Invalid bank code structure',
  },
  {
    description: 'GB2LABBY09012857201707',
    name: 'Invalid IBAN checksum structure',
  },
  { description: 'GB01BARC20714583608387', name: 'Invalid IBAN checksum' },
  { description: 'GB00HLFX11016111455365', name: 'Invalid IBAN checksum' },
  {
    description: 'US64SVBKUS6S3300958879',
    name: 'Country does not seem to support IBAN!',
  },
];

export const stripTestCardsPlugin: YalPlugin = (args) => {
  return args.setState({
    heading: 'Test IBANs',
    action: ({ item }) => {
      yal.copyToClipboard(item.description);
    },
    state: TEST_IBANS.map((x) => {
      return {
        ...x,
        icon,
      };
    }),
  });
};

export const config: YalPluginsConfig = {
  keywords: 'iban',
  filter: true,
};

export default stripTestCardsPlugin;
