import React from 'react';
import { Checkbox } from 'antd';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { AgeList } from '../constants';

interface GroupCheckboxProps {
  options: AgeList;
  callback: HandlerCallback;
  paramKey: keyof RequestParams;
}

export default function GroupCheckbox({
  options,
  callback,
  paramKey,
}: GroupCheckboxProps): JSX.Element {
  const onChangeHandler = (checkedValues: Array<CheckboxValueType>) => {
    callback(paramKey, checkedValues);
  };

  return (
    <Checkbox.Group onChange={onChangeHandler}>
      {options.map(({ key, label }) => (
        <Checkbox key={key} value={key}>
          {label}
        </Checkbox>
      ))}
    </Checkbox.Group>
  );
}
