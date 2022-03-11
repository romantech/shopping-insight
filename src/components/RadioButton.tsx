import React from 'react';
import { Radio, RadioChangeEvent } from 'antd';
import { SelectListType } from '../lib/constants';

interface RadioButtonProps {
  value: TimeUnit | Gender | Device;
  options: SelectListType;
  callback: HandlerCallback;
  paramKey: keyof RequestParams;
  size?: 'large' | 'middle' | 'small';
}

export default function RadioButton({
  value,
  options,
  callback,
  paramKey,
  size = 'large',
}: RadioButtonProps): JSX.Element {
  const onChangeHandler = (e: RadioChangeEvent) => {
    callback(paramKey, e.target.value);
  };

  return (
    <Radio.Group
      onChange={onChangeHandler}
      value={value}
      buttonStyle="outline"
      size={size}
    >
      {options.map(({ key, label }) => (
        <Radio.Button key={key} value={key}>
          {label}
        </Radio.Button>
      ))}
    </Radio.Group>
  );
}
