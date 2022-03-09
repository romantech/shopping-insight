import React, { useState } from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';
import { FlexCenterRow } from '../styles/commonStyles';
import TextInput from './TextInput';
import SelectForm from './SelectForm';
import { categoryKeys } from '../constants';
import SingleDatePicker from './SingleDatePicker';

export default function FormOptions(): JSX.Element {
  const [params, setParams] = useState<RequestParams>({
    startDate: moment().subtract(7, 'days').format('YYYY-MM-DD'),
    endDate: moment().format('YYYY-MM-DD'),
    timeUnit: 'date',
    category: '50000008',
    keyword: '',
  });

  const valueHandler = (key: keyof RequestParams, value: string | string[]) => {
    setParams(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <StyledWrapper>
      <SingleDatePicker
        initialValue={params.startDate}
        endDate={params.endDate}
        callback={valueHandler}
        paramKey="startDate"
      />
      <SingleDatePicker
        initialValue={params.endDate}
        startDate={params.startDate}
        callback={valueHandler}
        paramKey="endDate"
      />
      <SelectForm
        value={params.category}
        options={categoryKeys}
        callback={valueHandler}
        paramKey="category"
      />
      <TextInput
        value={params.keyword}
        callback={valueHandler}
        paramKey="keyword"
      />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.section`
  ${FlexCenterRow};
  gap: 1rem;
`;
