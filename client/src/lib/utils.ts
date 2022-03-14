/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// export type LineTypeKeys = keyof typeof LineChartLegendColor;

import { categoryList } from './constants';

export const isProd = process.env.NODE_ENV === 'production';

export type LineColors = typeof LineChartLegendColor[Ages];
export const LineChartLegendColor = {
  '10': '#C0392B ',
  '20': '#AF7AC5',
  '30': '#5DADE2',
  '40': '#1E8449',
  '50': '#D4AC0D',
  '60': '#2C3E50 ',
};

export const getDayOfWeek = (date: string) => {
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  return week[new Date(date).getDay()];
};

export const getLineColor = (group: Ages): LineColors => {
  return LineChartLegendColor[group];
};

export const checkValidKoWords = (str: string, validLen: number): boolean => {
  const re = /([^가-힣\x20])/i; // 자음 모음만 입력했다면 true
  return !re.test(str) && str.length >= validLen;
};

export function extractChartDataAndGroup(data: Data[]) {
  const groups: Set<Ages> = new Set();

  const metrics = data?.reduce((acc, cur) => {
    const idx = acc.findIndex(el => el.period === cur.period);
    if (!groups.has(cur.group)) groups.add(cur.group);

    if (idx === -1) {
      acc.push({
        period: cur.period,
        [cur.group]: cur.ratio,
      });
    } else {
      acc[idx][cur.group] = cur.ratio;
    }

    return acc;
  }, [] as Metric[]);

  return { groups: [...groups].sort(), metrics } as const;
}

export const getCategoryName = (categoryKey: Category) => {
  return categoryList.filter(({ key }) => key === categoryKey)[0].label;
};

export const computeMaxAndMin = (data: Record<string, number>) => {
  const valueList = Object.values(data);
  const keyList = Object.keys(data);

  const maxRatioIdx = valueList.findIndex(v => v === Math.max(...valueList));
  const minRatioIdx = valueList.findIndex(v => v === Math.min(...valueList));

  return {
    max: keyList[maxRatioIdx],
    min: keyList[minRatioIdx],
  } as const;
};

export function getMaxMinAge(rawData: InsightResponse) {
  const sumOfRatioByAge = rawData.results[0].data.reduce((acc, cur) => {
    acc[cur.group] = (acc[cur.group] || 0) + cur.ratio;
    return acc;
  }, {} as Record<string, number>);

  return computeMaxAndMin(sumOfRatioByAge);
}

export function getMaxMinDate(renderData: RenderData) {
  const sumOfRatioByDate = renderData.metrics.reduce(
    (acc, { period, ...age }) => {
      const ageList = Object.values(age) as Array<number>;
      const sum = ageList.reduce((a, c) => a + c, 0);

      acc[period] = ((acc[period] as number) || 0) + sum;
      return acc;
    },
    {},
  );

  return computeMaxAndMin(sumOfRatioByDate as Record<string, number>);
}

export type SummaryData = ReturnType<typeof getTextSummaryData>;
export function getTextSummaryData(
  rawData: InsightResponse,
  renderData: RenderData,
) {
  return {
    startDate: rawData.startDate,
    endDate: rawData.endDate,
    keyword: rawData.results[0].keyword[0],
    category: getCategoryName(renderData.category),
    age: getMaxMinAge(rawData),
    date: getMaxMinDate(renderData),
  };
}
