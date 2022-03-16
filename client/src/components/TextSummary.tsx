import React from 'react';
import styled from 'styled-components';
import { FlexCenterColumn, InfinitySansBold } from 'styles/commonStyles';
import { getDayOfWeek, getWeekOfMonth, SummaryData } from 'lib/utils';

interface TextSummaryProps {
  summaryData: SummaryData;
  hasGroup: boolean;
}

export default function TextSummary({
  summaryData,
  hasGroup,
}: TextSummaryProps): JSX.Element {
  const { startDate, endDate, keyword, age, date, category, timeUnit } =
    summaryData;

  const getRenderDateText = (fullDate: typeof date.max | typeof date.min) => {
    const [year, month] = fullDate.split('-');

    switch (timeUnit) {
      case 'month':
        return `${year}년 ${month}월`;
      case 'week':
        return `${year}년 ${month}월 ${getWeekOfMonth(fullDate)}째주`;
      default:
        return `${fullDate}(${getDayOfWeek(fullDate)})`;
    }
  };

  return (
    <StyledWrapper>
      <p>
        💸 <StyledBold>{`${getRenderDateText(startDate)}`}</StyledBold>부터{' '}
        <StyledBold>{`${getRenderDateText(endDate)}`}</StyledBold>까지{' '}
        <StyledBold>{category}</StyledBold> 카테고리의{' '}
        <StyledBold highlight>{keyword}</StyledBold> 키워드는{' '}
        <StyledBold>{age.max}대</StyledBold>가 가장 큰 관심을 보였어요
      </p>
      {hasGroup && (
        <p>
          😢 하지만 <StyledBold>{age.min}대</StyledBold>는 다른 연령대에 비해{' '}
          <StyledBold highlight>{keyword}</StyledBold>에 별로 관심이 없는 것
          같네요
        </p>
      )}
      <p>
        🗓️ <StyledBold>{`${getRenderDateText(date.max)}`}</StyledBold>에 가장
        많이 검색했고,{' '}
        <StyledBold>{`${getRenderDateText(date.min)}`}</StyledBold>에 가장 적게
        검색했어요
      </p>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.aside`
  ${FlexCenterColumn};
  justify-content: flex-start;
  gap: 2rem;

  width: 100%;
  height: 100%;
  overflow-y: auto;
  font-size: 1.4rem;
  color: gray;

  @media (max-width: 768px) {
    overflow: initial;
    font-size: 1.3rem;
  }

  p {
    word-break: break-all;
    word-wrap: break-word;
    letter-spacing: 0.15rem;
    line-height: normal;
  }
`;

const StyledBold = styled.span<{ highlight?: boolean }>`
  ${InfinitySansBold};
  color: var(--text-gray100);
  background-color: ${({ highlight }) => highlight && 'var(--bg-yellow)'};
`;
