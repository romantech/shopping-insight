import React from 'react';
import styled from 'styled-components';
import { FlexCenterColumn, InfinitySansBold } from 'styles/commonStyles';
import { getDayOfWeek, SummaryData } from 'lib/utils';

interface TextSummaryProps {
  summaryData: SummaryData;
  hasGroup: boolean;
}

export default function TextSummary({
  summaryData,
  hasGroup,
}: TextSummaryProps): JSX.Element {
  const { startDate, endDate, keyword, age, date, category } = summaryData;
  const startDay = getDayOfWeek(startDate);
  const endDay = getDayOfWeek(endDate);
  const maxDay = getDayOfWeek(date.max);
  const minDay = getDayOfWeek(date.min);

  return (
    <StyledWrapper>
      <p>
        💸 <span>{`${startDate}(${startDay})`}</span> 부터{' '}
        <span>{`${endDate}(${endDay})`}</span> 까지 <span>{category}</span>{' '}
        카테고리의 <StyledHighlight>{keyword}</StyledHighlight> 키워드는{' '}
        <span>{age.max}대</span>가 가장 큰 관심을 보였어요
      </p>
      {hasGroup && (
        <p>
          😢 하지만 <span>{age.min}대</span>는 다른 연령대에 비해{' '}
          <StyledHighlight>{keyword}</StyledHighlight>에 별로 관심이 없는 것
          같네요
        </p>
      )}
      <p>
        🗓️ <span>{`${date.max}(${maxDay})`}</span>에 가장 많이 검색했고,{' '}
        <span>{`${date.min}(${minDay})`}</span>에 가장 적게 검색했어요
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
    letter-spacing: 0.15rem;
    line-height: 120%;
  }

  span {
    ${InfinitySansBold};
    color: var(--text-gray100);
    word-break: break-all;
  }
`;

const StyledHighlight = styled.span`
  background-color: var(--bg-yellow);
`;
