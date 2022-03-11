import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

interface SelectFormProps {
  value: string;
  callback: HandlerCallback;
  paramKey: RequestParamKeys;
  options: FormOptionList;
  size?: FormSize;
}

export default function SelectForm({
  value,
  callback,
  paramKey,
  options,
  size = 'large',
}: SelectFormProps): JSX.Element {
  return (
    <Select
      onChange={v => callback(paramKey, v)}
      showSearch
      value={value}
      style={{ width: 200 }}
      size={size}
      placeholder="Category"
      optionFilterProp="children"
    >
      {options.map(({ label, key }) => (
        <Option key={key} value={key}>
          {label}
        </Option>
      ))}
    </Select>
  );
}
