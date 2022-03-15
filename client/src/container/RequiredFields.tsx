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
import { InfinitySansBold } from '../styles/commonStyles';

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
