import React from 'react';
import { categoryList, timeUnitList } from 'lib/constants';
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
  return (
    <div>
      <SingleDatePicker
        value={params.startDate}
        endDate={params.endDate}
        callback={handler}
        paramKey="startDate"
        placeholder="시작 날짜"
      />
      <SingleDatePicker
        value={params.endDate}
        startDate={params.startDate}
        callback={handler}
        paramKey="endDate"
        placeholder="종료 날짜"
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
        placeholder="키워드를 입력하세요"
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
