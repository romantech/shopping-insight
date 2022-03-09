/* eslint-disable @typescript-eslint/no-non-null-assertion,@typescript-eslint/explicit-module-boundary-types */
import React, { useState } from 'react';
import moment from 'moment';
import { DatePicker, notification, Space } from 'antd';

interface UseDatePickerProps {
  initialValue?: moment.Moment;
  type: TimeUnit;
  size?: 'large' | 'middle' | 'small';
}

export default function useDatePicker({
  initialValue = moment(),
  type = 'date',
  size = 'large',
}: UseDatePickerProps) {
  const [selectedDate, setSelectedDate] = useState(initialValue);
  const [status, setStatus] = useState<'' | 'warning' | 'error'>('');

  const onChangeHandler = (date: moment.Moment) => {
    const isValid = date.isAfter('2017-08-01');

    if (!isValid) {
      notification.error({
        message:
          '시작 날짜는 2017년 8월부터 선택할 수 있습니다. 다시 선택해주세요',
      });
    }

    setSelectedDate(date);
    setStatus(isValid ? '' : 'error');
  };

  function DateInput() {
    return (
      <Space direction="vertical">
        <DatePicker
          size={size}
          status={status}
          picker={type}
          value={selectedDate}
          onChange={date => onChangeHandler(date!)}
        />
      </Space>
    );
  }

  return [DateInput, selectedDate] as const;
}
