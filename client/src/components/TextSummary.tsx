import React from 'react';
import styled from 'styled-components';
import { FlexCenterColumn } from 'styles/commonStyles';
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
          😢 하지만 <span>{age.min}대</span>는 상대적으로{' '}
          <StyledHighlight>{keyword}</StyledHighlight>에 관심이 별로 없는 것
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

const StyledHighlight = styled.span`
  background-color: rgba(255, 215, 0, 0.47);
`;

const StyledWrapper = styled.section`
  ${FlexCenterColumn};
  gap: 2rem;
  width: 100%;
  height: 100%;
  font-size: calc(1rem + 0.8vw);
  font-weight: bold;
  color: gray;

  p {
    letter-spacing: 0.15rem;
    line-height: 120%;
  }

  span {
    color: #414141;
    word-break: break-all;
  }
`;
