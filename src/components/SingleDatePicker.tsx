/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState } from 'react';
import moment from 'moment';
import { DatePicker, notification, Space } from 'antd';
import { overDateMsg } from '../constants';

interface SingleDatePickerProps {
  callback: HandlerCallback;
  paramKey: keyof RequestParams;
  endDate?: string;
  startDate?: string;
  value?: string;
  size?: 'large' | 'middle' | 'small';
}
type Status = '' | 'warning' | 'error';

export default function SingleDatePicker({
  callback,
  paramKey,
  endDate,
  startDate,
  value,
  size = 'large',
}: SingleDatePickerProps): JSX.Element {
  const [status, setStatus] = useState<Status>('');

  const onChangeHandler = (date: moment.Moment) => {
    const isValid =
      date?.isAfter(moment(startDate || '2017-07-31').subtract(1, 'day')) &&
      date?.isBefore(moment(endDate || new Date()).add(endDate ? 1 : 0, 'day'));

    if (!isValid && date) {
      notification.error({
        duration: 2,
        message: overDateMsg,
      });
    }
    callback(paramKey, isValid ? date.format('YYYY-MM-DD') : '');
    setStatus(isValid || !date ? '' : 'error');
  };
  return (
    <Space direction="vertical">
      <DatePicker
        size={size}
        placeholder={paramKey}
        value={value ? moment(value) : null}
        status={status}
        onChange={date => onChangeHandler(date!)}
      />
    </Space>
  );
}
