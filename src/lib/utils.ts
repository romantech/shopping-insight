// export type LineTypeKeys = keyof typeof LineChartLegendColor;
export type LineColors = typeof LineChartLegendColor[Ages];
export const LineChartLegendColor = {
  '10': '#C0392B ',
  '20': '#AF7AC5',
  '30': '#5DADE2',
  '40': '#1E8449',
  '50': '#D4AC0D',
  '60': '#2C3E50 ',
};

export const getLineColor = (group: Ages): LineColors => {
  return LineChartLegendColor[group];
};

type RenderData = { [key: string]: number | string };
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function extractChartDataAndGroup(data: Data[]) {
  const group: Set<Ages> = new Set();

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
