import React from 'react';
import moment from 'moment';
import useDatePicker from '../hooks/useDatePicker';

export default function FormOptions(): JSX.Element {
  const [StartDateInput, startDate] = useDatePicker({
    initialValue: moment().subtract(7, 'days'),
  });
  const [EndDateInput, endDate] = useDatePicker({});

  return (
    <section>
      <StartDateInput />
      <EndDateInput />
    </section>
  );
}
