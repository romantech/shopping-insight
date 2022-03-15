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
          <Empty style={{ whiteSpace: 'pre-line' }} description={NO_DATA_MSG} />
        )}
      </StyledInsightWrapper>
    </>
  );
}

const StyledFormOptionWrapper = styled.section`
  ${FlexCenterRow};
  position: relative;
  height: 30%;
  background: var(--bg-form-option);
  overflow-x: auto;
  padding: 1.5rem;
`;

const StyledInsightWrapper = styled.section`
  ${FlexCenterRow};
  height: 70%;
  gap: 2.5rem;
  background: var(--bg-insight);
  padding: 3rem 3rem 3rem 1.5rem;
  overflow-x: hidden;

  @media (max-width: 768px) {
    ${FlexCenterColumn};
    padding: 3rem 1.5rem;
    gap: 2rem;
    min-height: 70%; // 로딩 스피너 나올 때 흰창 나와서 min-height 지정
    height: auto;
  }

  .ant-empty-description {
    font-size: 1rem;
    color: var(--text-gray50);
  }
`;

const StyledChartArea = styled.div`
  ${FlexCenterRow};
  width: 70%;
  max-width: 1080px;
  height: 100%;
  max-height: 39rem;

  @media (max-width: 768px) {
    width: 100%;
    min-height: 22rem;
    height: 40vh;
  }
`;

const StyledTextSummaryArea = styled.div`
  width: 30%;
  max-width: 550px;
  height: 100%;
  max-height: 39rem;
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
  color: var(--text-gray50);

  @media (max-width: 1200px) {
    display: none;
  }
`;
