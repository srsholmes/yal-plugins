const processCompare = (a, b) => {
  const aTitle = a.title.toLowerCase();
  const bTitle = b.title.toLowerCase();

  if (['node', 'python'].indexOf(aTitle) !== -1) {
    return -1;
  }

  if (['node', 'python'].indexOf(bTitle) !== -1) {
    return 1;
  }

  return 0;
};

export const sorter = (a, b) => {
  const isAApp = a.description.endsWith('.app');
  const isBApp = b.description.endsWith('.app');

  if (isAApp && isBApp) {
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  }

  if (isAApp) {
    return -1;
  }

  if (isBApp) {
    return 1;
  }

  return processCompare(a, b);
};
