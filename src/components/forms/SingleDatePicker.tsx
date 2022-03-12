/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState } from 'react';
import moment from 'moment';
import { DatePicker, notification, Space } from 'antd';
import { OVER_DATE_MSG } from 'lib/constants';

interface SingleDatePickerProps {
  value: string;
  callback: InsightParamsHandler;
  paramKey: RequestParamKeys;
  endDate?: string;
  startDate?: string;
  size?: FormSize;
  placeholder?: string;
}

export default function SingleDatePicker({
  value,
  callback,
  paramKey,
  endDate,
  startDate,
  size = 'large',
  placeholder,
}: SingleDatePickerProps): JSX.Element {
  const [status, setStatus] = useState<FormStatus>('');

  const onChangeHandler = (date: moment.Moment) => {
    const isValid =
      date?.isAfter(moment(startDate || '2017-07-31').subtract(1, 'day')) &&
      date?.isBefore(moment(endDate || new Date()).add(endDate ? 1 : 0, 'day'));

    if (!isValid && date) {
      notification.error({
        duration: 3,
        message: OVER_DATE_MSG,
      });
    }
    callback(paramKey, isValid ? date.format('YYYY-MM-DD') : '');
    setStatus(isValid || !date ? '' : 'error');
  };

  return (
    <Space direction="vertical">
      <DatePicker
        size={size}
        placeholder={placeholder || paramKey}
        value={value ? moment(value) : null}
        status={status}
        onChange={date => onChangeHandler(date!)}
      />
    </Space>
  );
}
