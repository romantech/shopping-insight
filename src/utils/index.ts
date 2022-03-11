type LineType = '10' | '20' | '30' | '40' | '50' | '60';
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

type RenderData = { [key: string]: number | string };
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function extractRenderDataAndGroup(data: Data[]) {
  const group: Set<string> = new Set([]);

  const renderData = data?.reduce((acc, cur) => {
    const idx = acc.findIndex(el => el.period === cur.period);
    if (!group.has(cur.group)) group.add(cur.group);

    if (idx === -1) {
      acc.push({
        period: cur.period,
        [cur.group]: cur.ratio,
      });
    } else {
      acc[idx][cur.group] = cur.ratio;
    }

    return acc;
  }, [] as RenderData[]);

  return { group: [...group].sort(), renderData } as const;
}
