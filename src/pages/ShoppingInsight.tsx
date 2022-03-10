import React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import FormOptions from '../components/FormOptions';
import Chart from '../components/Chart';
import { RootState } from '../modules';

interface RenderData {
  [key: string]: number | string;
}

export default function ShoppingInsight(): JSX.Element {
  const { loading, results, error } = useSelector(
    (state: RootState) => state.insightData,
  );

  const data = results[0]?.data;

  return (
    <StyledInsightWrapper>
      <FormOptions />
      {loading ? <div>로딩...</div> : data?.length > 0 && <Chart data={data} />}
    </StyledInsightWrapper>
  );
}

const StyledInsightWrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 1rem;
`;
