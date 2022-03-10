import React, { useState } from 'react';
import { Radio, RadioChangeEvent } from 'antd';
import { SelectListType } from '../constants';

interface RadioButtonProps {
  options: SelectListType;
  callback: HandlerCallback;
  paramKey: keyof RequestParams;
}

export default function RadioButton({
  options,
  callback,
  paramKey,
}: RadioButtonProps): JSX.Element {
  const [value, setValue] = useState(options[0].key);

  const onChangeHandler = (e: RadioChangeEvent) => {
    setValue(e.target.value);
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
