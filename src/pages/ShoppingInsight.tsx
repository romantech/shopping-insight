import React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';
import FormOptions from '../components/FormOptions';
import Chart from '../components/Chart';
import { RootState } from '../modules';
import { FlexCenterRow } from '../styles/commonStyles';

export default function ShoppingInsight(): JSX.Element {
  const { loading, results, error } = useSelector(
    (state: RootState) => state.insightData,
  );

  const data = results[0]?.data;

  return (
    <StyledInsightWrapper>
      <StyledFormOptions>
        <FormOptions />
      </StyledFormOptions>
      <StyledLineChart>
        {loading ? (
          <Spin size="large" />
        ) : (
          data?.length > 0 && <Chart data={data} />
        )}
      </StyledLineChart>
    </StyledInsightWrapper>
  );
}

const StyledInsightWrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

const StyledFormOptions = styled.section`
  width: 100%;
  height: 30%;
  padding: 1.5rem;
  display: flex;
  align-items: center;
`;

const StyledLineChart = styled.section`
  ${FlexCenterRow};
  height: 70%;
`;
