import React, { useState } from 'react';
import { Input } from 'antd';

interface TextInputProps {
  value: string;
  callback: HandlerCallback;
  paramKey: RequestParamKeys;
}

export default function TextInput({
  value,
  callback,
  paramKey,
}: TextInputProps): JSX.Element {
  const [status, setStatus] = useState<FormStatus>('');

  const onChangeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const isValid = target.value.length >= 1;

    setStatus(isValid ? '' : 'error');
    callback(paramKey, target.value);
  };

  return (
    <Input
      placeholder="키워드를 입력하세요"
      size="large"
      value={value}
      maxLength={20}
      status={status}
      style={{ maxWidth: 200 }}
      onChange={onChangeHandler}
    />
  );
}
