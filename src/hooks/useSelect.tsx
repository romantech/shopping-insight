import React, { useState } from 'react';
import { Select } from 'antd';

const { Option } = Select;

interface UseSelectProps {
  options: Record<string, string>[];
  size?: 'large' | 'middle' | 'small';
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useSelect({ options, size = 'large' }: UseSelectProps) {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const onChangeHandler = (value: string) => {
    setSelectedValue(value);
  };

  function SelectInput() {
    return (
      <Select
        onChange={onChangeHandler}
        showSearch
        value={selectedValue}
        style={{ width: 200 }}
        size={size}
        placeholder="Category"
        optionFilterProp="children"
      >
        {options.map(({ name, key }) => (
          <Option key={key} value={key}>
            {name}
          </Option>
        ))}
      </Select>
    );
  }

  return [SelectInput, selectedValue] as const;
}
