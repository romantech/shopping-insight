import React from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { getLineColor } from '../utils';

interface LineChartProps {
  data: Data[];
}

interface RenderData {
  [key: string]: number | string;
}

export default function Chart({ data }: LineChartProps): JSX.Element | null {
  const group: Set<string> = new Set([]);
  const renderData = data.reduce((acc: RenderData[], cur) => {
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
  }, []);

  return (
    <ResponsiveContainer width="90%" height="80%">
      <LineChart
        data={renderData}
        margin={{
          top: 5,
          right: 40,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="period" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" height={36} iconType="rect" iconSize={20} />
        {[...group].sort().map(g => (
          <Line
            name={`${g}대`} // legend 에 표시될 이름
            key={g}
            type="monotone" // 선 보간 유형
            dataKey={g}
            stroke={getLineColor(g)}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
