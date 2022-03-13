import React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import { Empty, Spin } from 'antd';
import FieldContainer from 'container/FieldContainer';
import { RootState } from 'modules';
import { FlexCenterRow } from 'styles/commonStyles';
import SimpleLineChart from 'components/charts/SimpleLineChart';
import { INTRODUCE_MSG, NO_DATA_MSG } from 'lib/constants';

export default function ShoppingInsight(): JSX.Element {
  const { loading, renderData, error } = useSelector(
    (state: RootState) => state.insightData,
  );

  const hasData = renderData.metrics.length > 0;

  return (
    <StyledInsightWrapper>
      <StyledFormOptions>
        <FieldContainer isLoading={loading} />
        <StyledSpan>{INTRODUCE_MSG}</StyledSpan>
      </StyledFormOptions>
      <StyledLineChart>
        {loading ? (
          <Spin size="large" />
        ) : hasData && error === null ? (
          <SimpleLineChart
            metrics={renderData.metrics}
            groups={renderData.groups}
            groupName="대"
          />
        ) : (
          <Empty description={NO_DATA_MSG} />
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
`;

const StyledFormOptions = styled.section`
  position: relative;
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  background: #f2f4f4;
  overflow: hidden;
`;

const StyledLineChart = styled.section`
  ${FlexCenterRow};
  background: rgba(234, 237, 237, 0.87);
  width: 100%;
  height: 70%;

  .ant-empty-description {
    font-size: 1rem;
    color: #919191;
  }
`;
