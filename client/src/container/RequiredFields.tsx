import React from 'react';
import {
  categoryList,
  END_DATE_TXT,
  INPUT_KEYWORD_PLACEHOLDER,
  START_DATE_TXT,
  timeUnitList,
} from 'lib/constants';
import SingleDatePicker from 'components/forms/SingleDatePicker';
import SelectForm from 'components/forms/SelectForm';
import TextInput from 'components/forms/TextInput';
import RadioButton from 'components/forms/RadioButton';

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
    <div>
      <SingleDatePicker
        value={params.startDate}
        endDate={params.endDate}
        callback={handler}
        limitDate={limitDate}
        paramKey="startDate"
        placeholder={START_DATE_TXT}
      />
      <SingleDatePicker
        value={params.endDate}
        startDate={params.startDate}
        callback={handler}
        limitDate={limitDate}
        paramKey="endDate"
        placeholder={END_DATE_TXT}
      />
      <SelectForm
        value={params.category}
        options={categoryList}
        callback={handler}
        paramKey="category"
      />
      <TextInput
        value={params.keyword}
        callback={handler}
        paramKey="keyword"
        placeholder={INPUT_KEYWORD_PLACEHOLDER}
      />
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
