/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useState } from 'react';
import { DatePicker, Space, Tooltip } from 'antd';
import { END_DATE_TXT, START_DATE_TXT, TODAY_DATE_TXT } from 'lib/constants';
import dayjs, { Dayjs } from 'dayjs';

interface SingleDatePickerProps {
  value: string;
  callback: InsightParamsHandler;
  paramKey: RequestParamKeys;
  limitDate?: string;
  endDate?: string;
  startDate?: string;
  size?: FormSize;
  width?: number | string;
  placeholder?: string;
}

export default function SingleDatePicker({
  value,
  callback,
  paramKey,
  limitDate,
  endDate,
  startDate,
  size = 'large',
  width,
  placeholder,
}: SingleDatePickerProps): JSX.Element {
  const [isValid, setIsValid] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    setIsValid(value.length > 0);
  }, [value]);

  const onChangeHandler = (date: Dayjs) => {
    const validDate =
      date?.isAfter(dayjs(startDate || limitDate).subtract(1, 'day')) &&
      date?.isBefore(dayjs(endDate || new Date()).add(endDate ? 1 : 0, 'day'));

    callback(paramKey, validDate ? date.format('YYYY-MM-DD') : '');
  };

  const toolTipMsg =
    paramKey === 'startDate'
      ? `${limitDate} ~ ${END_DATE_TXT}`
      : `${START_DATE_TXT} ~ ${TODAY_DATE_TXT}`;

  return (
    <Tooltip title={toolTipMsg} open={!isValid && isFocus}>
      <Space direction="vertical">
        <DatePicker
          placeholder={placeholder || paramKey}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          style={{ minWidth: width }}
          size={size}
          value={value ? dayjs(value) : null}
          status={!isValid && isFocus ? 'error' : ''}
          onChange={date => onChangeHandler(date!)}
        />
      </Space>
    </Tooltip>
  );
}
