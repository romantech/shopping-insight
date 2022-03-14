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
import { getLineColor } from 'lib/utils';

interface SimpleLineChartProps {
  metrics: Metric[];
  groups: Ages[];
  groupName: string;
  xAxisDataKey: Partial<keyof Data>;
}

export default function SimpleLineChart({
  metrics,
  groups,
  groupName,
  xAxisDataKey,
}: SimpleLineChartProps): JSX.Element {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={metrics}
        margin={{
          top: 5,
          right: 40,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xAxisDataKey} />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" height={36} iconType="rect" iconSize={20} />
        {groups.map(group => (
          <Line
            name={`${group}${groupName}`} // legend 에 표시될 이름
            key={group}
            type="monotone" // 선 보간 유형
            dataKey={group}
            stroke={getLineColor(group)}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
