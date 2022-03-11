import React from 'react';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';
import { Button, notification } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import TextInput from './TextInput';
import SelectForm from './SelectForm';
import {
  ageList,
  categoryList,
  deviceList,
  genderList,
  requiredParamKeys,
  timeUnitList,
} from '../constants';
import SingleDatePicker from './SingleDatePicker';
import GroupCheckbox from './GroupCheckbox';
import RadioButton from './RadioButton';
import { RootState } from '../modules';
import { setParams } from '../modules/selectedParams';
import { FlexCenterColumn, FlexCenterRow } from '../styles/commonStyles';
import { getDataRequest } from '../modules/insightData';

export default function FormOptions(): JSX.Element {
  const { selectedParams: params } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const onChangeHandler: HandlerCallback = (key, value) => {
    dispatch(setParams(key, value));
  };

  const searchHandler = () => {
    const isValid = requiredParamKeys.every(field => params[field].length > 0);

    if (isValid) {
      dispatch(getDataRequest(params));
    } else {
      notification.error({
        message: '필수 항목을 모두 입력 해주세요',
      });
    }
  };

  return (
    <StyledWrapper>
      <StyledFields>
        <h1>필수 항목</h1>
        <div>
          <SingleDatePicker
            value={params.startDate}
            endDate={params.endDate}
            callback={onChangeHandler}
            paramKey="startDate"
          />
          <SingleDatePicker
            value={params.endDate}
            startDate={params.startDate}
            callback={onChangeHandler}
            paramKey="endDate"
          />
          <SelectForm
            value={params.category}
            options={categoryList}
            callback={onChangeHandler}
            paramKey="category"
          />
          <TextInput
            value={params.keyword}
            callback={onChangeHandler}
            paramKey="keyword"
          />
          <RadioButton
            value={params.timeUnit as TimeUnit}
            options={timeUnitList}
            callback={onChangeHandler}
            paramKey="timeUnit"
          />
        </div>
      </StyledFields>
      <StyledFields>
        <h1>선택 항목</h1>
        <div>
          <GroupCheckbox
            value={params.ages as Ages[]}
            options={ageList}
            callback={onChangeHandler}
            paramKey="ages"
          />
          <RadioButton
            value={params.gender as Gender}
            options={genderList}
            callback={onChangeHandler}
            paramKey="gender"
          />
          <RadioButton
            value={params.device as Device}
            options={deviceList}
            callback={onChangeHandler}
            paramKey="device"
          />
          <Button
            type="primary"
            icon={<SearchOutlined />}
            size="large"
            onClick={searchHandler}
            style={{ width: 118 }}
          >
            Search
          </Button>
        </div>
      </StyledFields>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.section`
  ${FlexCenterColumn};
  padding: 1rem;
  width: 100%;
  gap: 2rem;
  h1 {
    font-size: 1.8rem;
    font-weight: bold;
  }
`;
const StyledFields = styled.section`
  ${FlexCenterRow};
  gap: 3rem;

  & > div {
    ${FlexCenterRow};
    gap: 1rem;
  }
`;
