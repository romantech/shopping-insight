/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { DatePicker, Space, Tooltip } from 'antd';
import { END_DATE_TXT, START_DATE_TXT, TODAY_DATE_TXT } from 'lib/constants';

interface SingleDatePickerProps {
  value: string;
  callback: InsightParamsHandler;
  paramKey: RequestParamKeys;
  limitDate?: string;
  endDate?: string;
  startDate?: string;
  size?: FormSize;
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
  placeholder,
}: SingleDatePickerProps): JSX.Element {
  const [isValid, setIsValid] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    setIsValid(value.length > 0);
  }, [value]);

  const onChangeHandler = (date: moment.Moment) => {
    const validDate =
      date?.isAfter(moment(startDate || limitDate).subtract(1, 'day')) &&
      date?.isBefore(moment(endDate || new Date()).add(endDate ? 1 : 0, 'day'));

    callback(paramKey, validDate ? date.format('YYYY-MM-DD') : '');
  };

  const toolTipMsg =
    paramKey === 'startDate'
      ? `${limitDate} ~ ${END_DATE_TXT}`
      : `${START_DATE_TXT} ~ ${TODAY_DATE_TXT}`;

  return (
    <Tooltip title={toolTipMsg} visible={!isValid && isFocus}>
      <Space direction="vertical">
        <DatePicker
          placeholder={placeholder || paramKey}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          size={size}
          value={value ? moment(value) : null}
          status={!isValid && isFocus ? 'error' : ''}
          onChange={date => onChangeHandler(date!)}
        />
      </Space>
    </Tooltip>
  );
}
