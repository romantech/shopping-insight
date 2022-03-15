import React from 'react';
import {
  categoryList,
  END_DATE_TXT,
  INPUT_KEYWORD_PLACEHOLDER,
  REQUIRED_FIELD_TXT,
  SELECT_FORM_PLACEHOLDER,
  START_DATE_TXT,
  timeUnitList,
} from 'lib/constants';
import SingleDatePicker from 'components/forms/SingleDatePicker';
import SelectForm from 'components/forms/SelectForm';
import TextInput from 'components/forms/TextInput';
import RadioButton from 'components/forms/RadioButton';
import styled from 'styled-components/macro';
import { EmptyElement, InfinitySansBold } from '../styles/commonStyles';

interface RequiredFieldsProps {
  params: RequiredParams;
  handler: InsightParamsHandler;
  children?: React.ReactNode;
}

export default function RequiredFields({
  params,
  handler,
  children,
}: RequiredFieldsProps): JSX.Element {
  const limitDate = '2017-08-01';

  return (
    <StyledFieldWrapper>
      <h1>{REQUIRED_FIELD_TXT}</h1>
      <SingleDatePicker
        value={params.startDate}
        endDate={params.endDate}
        callback={handler}
        limitDate={limitDate}
        paramKey="startDate"
        width={153}
        placeholder={START_DATE_TXT}
      />
      <SingleDatePicker
        value={params.endDate}
        startDate={params.startDate}
        callback={handler}
        limitDate={limitDate}
        paramKey="endDate"
        width={153}
        placeholder={END_DATE_TXT}
      />
      <SelectForm
        value={params.category}
        options={categoryList}
        callback={handler}
        paramKey="category"
        width={200}
        placeholder={SELECT_FORM_PLACEHOLDER}
      />
      <TextInput
        value={params.keyword}
        callback={handler}
        paramKey="keyword"
        width={200}
        placeholder={INPUT_KEYWORD_PLACEHOLDER}
      />
      <RadioButton
        value={params.timeUnit}
        options={timeUnitList}
        callback={handler}
        paramKey="timeUnit"
      />
      {children}
      <EmptyElement padding="0 0.8rem 0 0" height="100%" />
      {/* 자식 요소 <StyledFieldWrapper> 너비가 길어서 생긴 스크롤이
      부모 요소 <FieldContainer> 에 나타나도록 작성함. 이때 스크롤 끝 여백이
      없는 것처럼 보이므로 마지막에 빈 요소 <EmptyElement 추가함 */}
    </StyledFieldWrapper>
  );
}

export const StyledFieldWrapper = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;

  h1 {
    ${InfinitySansBold};
    min-width: 7.5rem;
    margin-right: 1rem;
    font-size: 1.7rem;
  }
`;
