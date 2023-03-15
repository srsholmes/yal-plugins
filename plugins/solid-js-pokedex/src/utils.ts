export const properCase = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const createLeadingZero = (num: string) => {
  return num.toString().padStart(3, '0');
};
