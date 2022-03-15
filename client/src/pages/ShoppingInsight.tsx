import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'modules';
import styled from 'styled-components/macro';
import { Empty, Spin } from 'antd';
import { FlexCenterColumn, FlexCenterRow } from 'styles/commonStyles';
import FieldContainer from 'container/FieldContainer';
import SimpleLineChart from 'components/charts/SimpleLineChart';
import TextSummary from 'components/TextSummary';
import { INTRODUCE_MSG, NO_DATA_MSG } from 'lib/constants';
import { getTextSummaryData, SummaryData } from 'lib/utils';

export default function ShoppingInsight(): JSX.Element {
  const { loading, renderData, rawData, error } = useSelector(
    (state: RootState) => state.insightData,
  );

  const hasData = renderData.metrics.length > 0;
  const summaryData = rawData
    ? getTextSummaryData(rawData, renderData)
    : ({} as SummaryData);

  return (
    <>
      <StyledFormOptionWrapper>
        <FieldContainer isLoading={loading} />
        <StyledSpan>{INTRODUCE_MSG}</StyledSpan>
      </StyledFormOptionWrapper>
      <StyledInsightWrapper>
        {loading ? (
          <Spin size="large" />
        ) : hasData && error === null ? (
          <>
            <StyledChartArea>
              <SimpleLineChart
                metrics={renderData.metrics}
                groups={renderData.groups}
                groupName="대"
                xAxisDataKey="period"
              />
            </StyledChartArea>
            <StyledTextSummaryArea>
              <TextSummary
                summaryData={summaryData}
                hasGroup={renderData.groups.length > 3}
              />
            </StyledTextSummaryArea>
          </>
        ) : (
          <Empty description={NO_DATA_MSG} />
        )}
      </StyledInsightWrapper>
    </>
  );
}

const StyledFormOptionWrapper = styled.section`
  ${FlexCenterRow};
  position: relative;
  height: 30%;
  background: #f2f4f4;
  overflow-x: auto;
  padding: 1.5rem;
`;

const StyledInsightWrapper = styled.section`
  ${FlexCenterRow};
  height: 70%;
  gap: 2.5rem;
  background: rgba(234, 237, 237, 0.87);
  padding: 3rem 3rem 3rem 1.5rem;

  @media (max-width: 768px) {
    ${FlexCenterColumn};
    padding: 3rem 1.5rem;
    gap: 2rem;
    min-height: 70%; // 로딩 스피너 나올 때 흰창 나와서 min-height 지정
    height: auto;
  }

  .ant-empty-description {
    font-size: 1rem;
    color: #919191;
  }
`;

const StyledChartArea = styled.div`
  ${FlexCenterRow};
  width: 70%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    min-height: 350px;
    height: 40vh;
  }
`;

const StyledTextSummaryArea = styled.div`
  width: 30%;
  height: 100%;
  padding-top: 2.2rem;
  padding-bottom: 0.8rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

const StyledSpan = styled.span`
  position: absolute;
  right: 1.2rem;
  bottom: 1.2rem;
  font-size: 0.88rem;
  color: #919191;
`;
