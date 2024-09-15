import React from 'react';
import { Checkbox } from 'antd';

interface GroupCheckboxProps {
  value: Ages[];
  options: FormOptionList;
  callback: InsightParamsHandler;
  paramKey: RequestParamKeys;
}

export default function GroupCheckbox({
  value,
  options,
  callback,
  paramKey,
}: GroupCheckboxProps): JSX.Element {
  const onChangeHandler = (checkedValues: Array<string | number>) => {
    callback(paramKey, checkedValues);
  };

  return (
    <Checkbox.Group
      onChange={onChangeHandler}
      value={value}
      style={{ minWidth: 'max-content' }}
    >
      {options.map(({ key, label }) => (
        <Checkbox key={key} value={key}>
          {label}
        </Checkbox>
      ))}
    </Checkbox.Group>
  );
}
