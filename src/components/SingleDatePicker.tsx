/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState } from 'react';
import moment from 'moment';
import { DatePicker, notification, Space } from 'antd';

interface SingleDatePickerProps {
  callback: HandlerCallback;
  paramKey: keyof RequestParams;
  endDate?: string;
  startDate?: string;
  initialValue?: string;
  type?: TimeUnit;
  size?: 'large' | 'middle' | 'small';
}

export default function SingleDatePicker({
  callback,
  paramKey,
  endDate,
  startDate,
  initialValue,
  type = 'date',
  size = 'large',
}: SingleDatePickerProps): JSX.Element {
  const [status, setStatus] = useState<'' | 'warning' | 'error'>('');

  const onChangeHandler = (date: moment.Moment, dateString: string) => {
    const isValid =
      date?.isAfter(startDate || '2017-08-01') &&
      date?.isBefore(endDate || moment());

    if (!isValid && date) {
      notification.error({
        message:
          '2017년 8월부터 오늘까지만 조회할 수 있습니다. 다시 선택해주세요',
      });
    }
    callback(paramKey, isValid ? dateString : '');
    setStatus(isValid || !date ? '' : 'error');
  };

  return (
    <Space direction="vertical">
      <DatePicker
        size={size}
        placeholder={paramKey}
        value={initialValue ? moment(initialValue) : undefined}
        status={status}
        picker={type}
        onChange={(date, dateString) => onChangeHandler(date!, dateString)}
      />
    </Space>
  );
}
