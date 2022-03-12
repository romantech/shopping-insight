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
import { getLineColor } from '../../lib/utils';

interface SimpleLineChartProps {
  metrics: Metric[];
  groups: Ages[];
}

export default function SimpleLineChart({
  metrics,
  groups,
}: SimpleLineChartProps): JSX.Element {
  return (
    <ResponsiveContainer width="90%" height="80%">
      <LineChart
        data={metrics}
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
        {groups.map(g => (
          <Line
            onAnimationStart={console.log}
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
