import React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import { Empty, Spin } from 'antd';
import FormOptions from '../components/FormOptions';
import { RootState } from '../modules';
import { FlexCenterRow } from '../styles/commonStyles';
import Chart from '../components/Chart';
import { extractRenderDataAndGroup } from '../utils';
import { introduceMsg, noDataMsg } from '../constants';

export default function ShoppingInsight(): JSX.Element {
  const { loading, response, error } = useSelector(
    (state: RootState) => state.insightData,
  );

  const { group, renderData } = extractRenderDataAndGroup(response[0]?.data);
  return (
    <StyledInsightWrapper>
      <StyledFormOptions>
        <FormOptions />
        <StyledSpan>{introduceMsg}</StyledSpan>
      </StyledFormOptions>
      <StyledLineChart>
        {loading ? (
          <Spin size="large" />
        ) : renderData?.length && error === null ? (
          <Chart data={renderData} group={group} />
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
