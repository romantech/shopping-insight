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
  data: Array<Record<string, string | number>>;
  group: Array<string>;
}

export default function Chart({
  data,
  group,
}: LineChartProps): JSX.Element | null {
  return (
    <ResponsiveContainer width="90%" height="80%">
      <LineChart
        data={data}
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
        {group.map(g => (
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
