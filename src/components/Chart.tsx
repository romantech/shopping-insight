import React from 'react';
import styled from 'styled-components/macro';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
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
    <LineChart
      width={1280}
      height={500}
      data={renderData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="period" />
      <YAxis />
      <Tooltip />
      <Legend />
      {[...group].sort().map(g => (
        <Line key={g} type="monotone" dataKey={g} stroke={getLineColor(g)} />
      ))}
    </LineChart>
  );
}

const StyledWrapper = styled.section`
  width: 100%;
  height: 70%;
  background-color: gray;
`;
