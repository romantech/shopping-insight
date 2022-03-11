import React from 'react';
import { Checkbox } from 'antd';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';

interface GroupCheckboxProps {
  value: Ages[];
  options: FormOptionList;
  callback: HandlerCallback;
  paramKey: RequestParamKeys;
}

export default function GroupCheckbox({
  value,
  options,
  callback,
  paramKey,
}: GroupCheckboxProps): JSX.Element {
  const onChangeHandler = (checkedValues: Array<CheckboxValueType>) => {
    callback(paramKey, checkedValues);
  };

  return (
    <Checkbox.Group onChange={onChangeHandler} value={value}>
      {options.map(({ key, label }) => (
        <Checkbox key={key} value={key}>
          {label}
        </Checkbox>
      ))}
    </Checkbox.Group>
  );
}
