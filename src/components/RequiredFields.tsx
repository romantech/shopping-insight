import React, { ReactElement } from 'react';
import { categoryList, timeUnitList } from 'lib/constants';
import SingleDatePicker from './forms/SingleDatePicker';
import SelectForm from './forms/SelectForm';
import TextInput from './forms/TextInput';
import RadioButton from './forms/RadioButton';

interface RequiredFieldsProps {
  params: RequiredParams;
  handler: HandlerCallback;
  children?: ReactElement;
}

export default function RequiredFields({
  params,
  handler,
  children,
}: RequiredFieldsProps): JSX.Element {
  return (
    <div>
      <SingleDatePicker
        value={params.startDate}
        endDate={params.endDate}
        callback={handler}
        paramKey="startDate"
      />
      <SingleDatePicker
        value={params.endDate}
        startDate={params.startDate}
        callback={handler}
        paramKey="endDate"
      />
      <SelectForm
        value={params.category}
        options={categoryList}
        callback={handler}
        paramKey="category"
      />
      <TextInput value={params.keyword} callback={handler} paramKey="keyword" />
      <RadioButton
        value={params.timeUnit}
        options={timeUnitList}
        callback={handler}
        paramKey="timeUnit"
      />
      {children}
    </div>
  );
}
