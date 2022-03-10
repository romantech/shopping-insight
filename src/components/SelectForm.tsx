import React from 'react';
import { Select } from 'antd';
import { SelectListType } from '../constants';

const { Option } = Select;

interface SelectFormProps {
  value: string;
  callback: HandlerCallback;
  paramKey: keyof RequestParams;
  options: SelectListType;
  size?: 'large' | 'middle' | 'small';
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
