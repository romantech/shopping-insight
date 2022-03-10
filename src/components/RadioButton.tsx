import React from 'react';
import { Radio, RadioChangeEvent } from 'antd';
import { SelectListType } from '../constants';

interface RadioButtonProps {
  value: TimeUnit | Gender | Device;
  options: SelectListType;
  callback: HandlerCallback;
  paramKey: keyof RequestParams;
}

export default function RadioButton({
  value,
  options,
  callback,
  paramKey,
}: RadioButtonProps): JSX.Element {
  const onChangeHandler = (e: RadioChangeEvent) => {
    callback(paramKey, e.target.value);
  };

  return (
    <Radio.Group onChange={onChangeHandler} value={value} buttonStyle="solid">
      {options.map(({ key, label }) => (
        <Radio.Button key={key} value={key}>
          {label}
        </Radio.Button>
      ))}
    </Radio.Group>
  );
}
