import React from 'react';
import moment from 'moment';
import styled from 'styled-components/macro';
import useDatePicker from '../hooks/useDatePicker';
import { categoryKeys } from '../constants';
import useSelect from '../hooks/useSelect';
import { FlexCenterRow } from '../styles/commonStyles';

export default function FormOptions(): JSX.Element {
  const [StartDateInput, startDate] = useDatePicker({
    initialValue: moment().subtract(7, 'days'),
    type: 'date',
  });
  const [EndDateInput, endDate] = useDatePicker({ type: 'date' });
  const [SelectInput, selectedCategory] = useSelect({ options: categoryKeys });

  return (
    <StyledWrapper>
      <StartDateInput />
      <EndDateInput />
      <SelectInput />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.section`
  ${FlexCenterRow};
  gap: 1rem;
`;
