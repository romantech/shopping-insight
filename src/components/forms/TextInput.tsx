import React, { useEffect, useState } from 'react';
import { Input, Tooltip } from 'antd';

interface TextInputProps {
  value: string;
  callback: InsightParamsHandler;
  paramKey: RequestParamKeys;
  validLen?: number;
  placeholder?: string;
}

export default function TextInput({
  value,
  callback,
  paramKey,
  validLen = 1,
  placeholder,
}: TextInputProps): JSX.Element {
  const [isValid, setIsValid] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    if (value.length >= validLen) setIsValid(true);
  }, [value, validLen]);

  const onChangeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setIsValid(target.value.length >= validLen);
    callback(paramKey, target.value);
  };

  return (
    <Tooltip title="최소 1글자 이상 입력하세요" visible={!isValid && isFocus}>
      <Input
        placeholder={placeholder || paramKey}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        size="large"
        value={value}
        maxLength={20}
        status={!isValid && isFocus ? 'error' : ''}
        style={{ maxWidth: 200 }}
        onChange={onChangeHandler}
      />
    </Tooltip>
  );
}
