type LineType = '10' | '20' | '30' | '40' | '50' | '60';
// eslint-disable-next-line import/prefer-default-export
export const getLineColor = (group: string): string => {
  const colorScheme = {
    '10': '#FF00FF',
    '20': '#800080',
    '30': '#000080',
    '40': '#008080',
    '50': '#808000',
    '60': '#808080',
  };
  return colorScheme[group as LineType];
};
