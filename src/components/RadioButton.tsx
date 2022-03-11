import React from 'react';
import { Radio, RadioChangeEvent } from 'antd';

interface RadioButtonProps {
  value: TimeUnit | Gender | Device;
  options: FormOptionList;
  callback: HandlerCallback;
  paramKey: RequestParamKeys;
  size?: FormSize;
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
