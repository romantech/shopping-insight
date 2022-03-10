import React from 'react';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';
import { FlexCenterRow } from '../styles/commonStyles';
import TextInput from './TextInput';
import SelectForm from './SelectForm';
import {
  ageList,
  categoryList,
  deviceList,
  genderList,
  timeUnitList,
} from '../constants';
import SingleDatePicker from './SingleDatePicker';
import GroupCheckbox from './GroupCheckbox';
import RadioButton from './RadioButton';
import { RootState } from '../modules';
import { setParams } from '../modules/selectedParams';
import { getDataRequest } from '../modules/insightData';

export default function FormOptions(): JSX.Element {
  const { selectedParams: params } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const valueHandler: HandlerCallback = (key, value) => {
    dispatch(setParams(key, value));
  };

  const buttonHandler = () => {
    dispatch(getDataRequest(params));
  };

  return (
    <StyledWrapper>
      <SingleDatePicker
        value={params.startDate}
        endDate={params.endDate}
        callback={valueHandler}
        paramKey="startDate"
      />
      <SingleDatePicker
        value={params.endDate}
        startDate={params.startDate}
        callback={valueHandler}
        paramKey="endDate"
      />
      <SelectForm
        value={params.category}
        options={categoryList}
        callback={valueHandler}
        paramKey="category"
      />
      <TextInput
        value={params.keyword}
        callback={valueHandler}
        paramKey="keyword"
      />
      <GroupCheckbox
        value={params.ages as Ages[]}
        options={ageList}
        callback={valueHandler}
        paramKey="ages"
      />
      <RadioButton
        value={params.timeUnit as TimeUnit}
        options={timeUnitList}
        callback={valueHandler}
        paramKey="timeUnit"
      />
      <RadioButton
        value={params.gender as Gender}
        options={genderList}
        callback={valueHandler}
        paramKey="gender"
      />
      <RadioButton
        value={params.device as Device}
        options={deviceList}
        callback={valueHandler}
        paramKey="device"
      />
      <button type="button" onClick={buttonHandler}>
        인증 요청
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.section`
  ${FlexCenterRow};
  gap: 1rem;
`;
