import React, { useState } from 'react';
import { Input } from 'antd';

interface TextInputProps {
  value: string;
  callback: HandlerCallback;
  paramKey: keyof RequestParams;
}

export default function TextInput({
  value,
  callback,
  paramKey,
}: TextInputProps): JSX.Element {
  const [status, setStatus] = useState<'' | 'warning' | 'error'>('');

  const onChangeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const isValid = target.value.length > 2;
    setStatus(isValid ? '' : 'error');
    callback(paramKey, target.value);
  };

  return (
    <Input
      placeholder="Keyword"
      size="large"
      value={value}
      maxLength={20}
      status={status}
      style={{ maxWidth: 200 }}
      onChange={onChangeHandler}
    />
  );
}