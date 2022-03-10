type LineType = '10' | '20' | '30' | '40' | '50' | '60';
// eslint-disable-next-line import/prefer-default-export
export const getLineColor = (group: string): string => {
  const colorScheme = {
    '10': '#C0392B ',
    '20': '#AF7AC5',
    '30': '#5DADE2',
    '40': '#1E8449',
    '50': '#D4AC0D',
    '60': '#2C3E50 ',
  };
  return colorScheme[group as LineType];
};
