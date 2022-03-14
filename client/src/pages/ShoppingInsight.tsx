import React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import { Empty, Spin } from 'antd';
import FieldContainer from 'container/FieldContainer';
import { RootState } from 'modules';
import { FlexCenterRow } from 'styles/commonStyles';
import SimpleLineChart from 'components/charts/SimpleLineChart';
import { INTRODUCE_MSG, NO_DATA_MSG } from 'lib/constants';
import { getTextSummaryData, SummaryData } from '../lib/utils';
import TextSummary from '../components/TextSummary';

export default function ShoppingInsight(): JSX.Element {
  const { loading, renderData, rawData, error } = useSelector(
    (state: RootState) => state.insightData,
  );

  const hasData = renderData.metrics.length > 0;
  const summaryData = rawData
    ? getTextSummaryData(rawData, renderData)
    : ({} as SummaryData);

  return (
    <StyledContainer>
      <StyledFormOptions>
        <FieldContainer isLoading={loading} />
        <StyledSpan>{INTRODUCE_MSG}</StyledSpan>
      </StyledFormOptions>
      <StyledInsightArea>
        {loading ? (
          <Spin size="large" />
        ) : hasData && error === null ? (
          <>
            <StyledChartWrapper>
              <SimpleLineChart
                metrics={renderData.metrics}
                groups={renderData.groups}
                groupName="대"
                xAxisDataKey="period"
              />
            </StyledChartWrapper>
            <StyledSummaryWrapper>
              <TextSummary
                summaryData={summaryData}
                hasGroup={renderData.groups.length > 3}
              />
            </StyledSummaryWrapper>
          </>
        ) : (
          <Empty description={NO_DATA_MSG} />
        )}
      </StyledInsightArea>
    </StyledContainer>
  );
}

const StyledSpan = styled.span`
  font-size: 0.88rem;
  color: #919191;
  position: absolute;
  right: 20px;
  bottom: 20px;
`;

const StyledContainer = styled.section`
  width: 100%;
  height: 100%;
`;

const StyledFormOptions = styled.section`
  position: relative;
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  background: #f2f4f4;
  overflow: auto;
`;

const StyledChartWrapper = styled.div`
  ${FlexCenterRow};
  overflow: hidden;
  width: 70%;
  height: 100%;
`;

const StyledSummaryWrapper = styled.div`
  ${FlexCenterRow};
  width: 30%;
  height: 100%;
`;

const StyledInsightArea = styled.section`
  ${FlexCenterRow};
  padding: 3rem 3rem 3rem 1rem;
  gap: 2rem;
  background: rgba(234, 237, 237, 0.87);
  width: 100%;
  height: 70%;

  .ant-empty-description {
    font-size: 1rem;
    color: #919191;
  }
`;
