import React from 'react';
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
  return (
    <Input
      placeholder="Keyword"
      size="large"
      value={value}
      maxLength={10}
      style={{ width: 200 }}
      onChange={({ target }) => callback(paramKey, target.value)}
    />
  );
}
