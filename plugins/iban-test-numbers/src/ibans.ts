export const VALID_NUMBERS = [
  {
    name: 'Visa (Valid)',
    description: '4242424242424242',
  },
  {
    name: 'Visa (debit (Valid)',
    description: '4000056655665556',
  },
  {
    name: 'Mastercard (Valid)',
    description: '5555555555554444',
  },
  {
    name: 'Mastercard 2-series (Valid)',
    description: '2223003122003222',
  },
  {
    name: 'Mastercard debit (Valid)',
    description: '5200828282828210',
  },
  {
    name: 'Mastercard prepaid (Valid)',
    description: '5105105105105100',
  },
  {
    name: 'American Express (Valid)',
    description: '378282246310005',
  },
  {
    name: 'American Express (Valid)',
    description: '371449635398431',
  },
  {
    name: 'Discover (Valid)',
    description: '6011111111111117',
  },
  {
    name: 'Discover (Valid)',
    description: '6011000990139424',
  },
  {
    name: 'Discover (debit (Valid)',
    description: '6011981111111113',
  },
  {
    name: 'Diners Club (Valid)',
    description: '3056930009020004',
  },
  {
    name: 'Diners Club (14-digit card (Valid)',
    description: '36227206271667',
  },
  {
    name: 'JCB (Valid)',
    description: '3566002020360505',
  },
  {
    name: 'UnionPay (Valid)',
    description: '6200000000000005',
  },
];

const COUNTRY_NUMBERS = [
  {
    name: 'United States (US)',
    description: '4242424242424242',
  },
  {
    name: 'Brazil (BR)',
    description: '4000000760000002',
  },
  {
    name: 'Canada (CA)',
    description: '4000001240000000',
  },
  {
    name: 'Mexico (MX)',
    description: '4000004840008001',
  },
];
const EUROPE_NUMBERS = [
  {
    name: 'United Arab Emirates (AE)',
    description: '4000007840000001',
  },
  {
    name: 'United Arab Emirates (AE)',
    description: '5200007840000022',
  },
  {
    name: 'Austria (AT)',
    description: '4000000400000008',
  },
  {
    name: 'Belgium (BE)',
    description: '4000000560000004',
  },
  {
    name: 'Bulgaria (BG)',
    description: '4000001000000000',
  },
  {
    name: 'Belarus (BY)',
    description: '4000001120000005',
  },
  {
    name: 'Croatia (HR)',
    description: '4000001910000009',
  },
  {
    name: 'Cyprus (CY)',
    description: '4000001960000008',
  },
  {
    name: 'Czech Republic (CZ)',
    description: '4000002030000002',
  },
  {
    name: 'Denmark (DK)',
    description: '4000002080000001',
  },
  {
    name: 'Estonia (EE)',
    description: '4000002330000009',
  },
  {
    name: 'Finland (FI)',
    description: '4000002460000001',
  },
  {
    name: 'France (FR)',
    description: '4000002500000003',
  },
  {
    name: 'Germany (DE)',
    description: '4000002760000016',
  },
  {
    name: 'Gibraltar (GI)',
    description: '4000002920000005',
  },
  {
    name: 'Greece (GR)',
    description: '4000003000000030',
  },
  {
    name: 'Hungary (HU)',
    description: '4000003480000005',
  },
  {
    name: 'Ireland (IE)',
    description: '4000003720000005',
  },
  {
    name: 'Italy (IT)',
    description: '4000003800000008',
  },
  {
    name: 'Latvia (LV)',
    description: '4000004280000005',
  },
  {
    name: 'Liechtenstein (LI)',
    description: '4000004380000004',
  },
  {
    name: 'Lithuania (LT)',
    description: '4000004400000000',
  },
  {
    name: 'Luxembourg (LU)',
    description: '4000004420000006',
  },
  {
    name: 'Malta (MT)',
    description: '4000004700000007',
  },
  {
    name: 'Netherlands (NL)',
    description: '4000005280000002',
  },
  {
    name: 'Norway (NO)',
    description: '4000005780000007',
  },
  {
    name: 'Poland (PL)',
    description: '4000006160000005',
  },
  {
    name: 'Portugal (PT)',
    description: '4000006200000007',
  },
  {
    name: 'Romania (RO)',
    description: '4000006420000001',
  },
  {
    name: 'Saudi Arabia (SA)',
    description: '4000006820000007',
  },
  {
    name: 'Slovenia (SI)',
    description: '4000007050000006',
  },
  {
    name: 'Slovakia (SK)',
    description: '4000007030000001',
  },
  {
    name: 'Spain (ES)',
    description: '4000007240000007',
  },
  {
    name: 'Sweden (SE)',
    description: '4000007520000008',
  },
  {
    name: 'Switzerland (CH)',
    description: '4000007560000009',
  },
  {
    name: 'United Kingdom (GB)',
    description: '4000008260000000',
  },
  {
    name: 'United Kingdom (GB)',
    description: '4000058260000005',
  },
  {
    name: 'United Kingdom (GB)',
    description: '555555826555444',
  },
];

const DECLINED_NUMBERS = [
  {
    name: 'Generic (Declined)',
    description: '4000000000000002',
  },
  {
    name: 'Insufficient funds (Declined)',
    description: '4000000000009995',
  },
  {
    name: 'Lost card (Declined)',
    description: '4000000000009987',
  },
  {
    name: 'Stolen card (Declined)',
    description: '4000000000009979',
  },
  {
    name: 'Expired card (Declined)',
    description: '4000000000000069',
  },
  {
    name: 'Incorrect CVC (Declined)',
    description: '4000000000000127',
  },
  {
    name: 'Processing error (Declined)',
    description: '4000000000000119',
  },
  {
    name: 'Incorrect number (Declined)',
    description: '4242424242424241',
  },
];

const FRAUD_NUMBERS = [
  {
    name: 'Always blocked (Fraud)',
    description: '4100000000000019',
  },
  {
    name: 'Highest risk (Fraud)',
    description: '4000000000004954',
  },
  {
    name: 'Elevated risk (Fraud)',
    description: '4000000000009235',
  },
  {
    name: 'CVC check fails (Fraud)',
    description: '4000000000000101',
  },
  {
    name: 'Postal code check fails (Fraud)',
    description: '4000000000000036',
  },
  {
    name: 'Line1 check fails (Fraud)',
    description: '4000000000000028',
  },
  {
    name: 'Address checks fail (Fraud)',
    description: '4000000000000010',
  },
  {
    name: 'Address unavailable (Fraud)',
    description: '4000000000000044',
  },
];

export const ALL_CARDS = [
  ...VALID_NUMBERS,
  ...COUNTRY_NUMBERS,
  ...EUROPE_NUMBERS,
  ...DECLINED_NUMBERS,
  ...FRAUD_NUMBERS,
];
