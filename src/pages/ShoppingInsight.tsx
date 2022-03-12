import React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import { Empty, Spin } from 'antd';
import FieldContainer from 'components/FieldContainer';
import { RootState } from 'modules';
import { FlexCenterRow } from 'styles/commonStyles';
import SimpleLineChart from 'components/charts/SimpleLineChart';
import { introduceMsg, noDataMsg } from 'lib/constants';
import dummy from 'lib/dummy';

export default function ShoppingInsight(): JSX.Element {
  const { loading, rawData, renderData, error } = useSelector(
    (state: RootState) => state.insightData,
  );

  const isProd = process.env.NODE_ENV === 'production';
  const hasData = isProd ? true : !!rawData;
  const data = isProd ? dummy : renderData;

  return (
    <StyledInsightWrapper>
      <StyledFormOptions>
        <FieldContainer />
        <StyledSpan>{introduceMsg}</StyledSpan>
      </StyledFormOptions>
      <StyledLineChart>
        {loading ? (
          <Spin size="large" />
        ) : hasData && error === null ? (
          <SimpleLineChart metrics={data.metrics} groups={data.groups} />
        ) : (
          <Empty description={noDataMsg} />
        )}
      </StyledLineChart>
    </StyledInsightWrapper>
  );
}

const StyledSpan = styled.span`
  font-size: 0.88rem;
  color: #919191;
  position: absolute;
  right: 20px;
  bottom: 20px;
`;

const StyledInsightWrapper = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const StyledFormOptions = styled.section`
  position: relative;
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  background: #f2f4f4;
`;

const StyledLineChart = styled.section`
  ${FlexCenterRow};
  background: rgba(234, 237, 237, 0.87);
  height: 70%;

  .ant-empty-description {
    font-size: 1rem;
    color: #919191;
  }
`;
