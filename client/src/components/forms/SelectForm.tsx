import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

interface SelectFormProps {
  value: string;
  callback: InsightParamsHandler;
  paramKey: RequestParamKeys;
  options: FormOptionList;
  size?: FormSize;
  placeholder?: string;
}

export default function SelectForm({
  value,
  callback,
  paramKey,
  options,
  size = 'large',
  placeholder,
}: SelectFormProps): JSX.Element {
  return (
    <Select
      onChange={v => callback(paramKey, v)}
      showSearch
      value={value}
      style={{ width: 200 }}
      size={size}
      placeholder={placeholder || paramKey}
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
