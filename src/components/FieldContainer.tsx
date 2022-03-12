import React from 'react';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';
import { Button, notification } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { RootState } from 'modules';
import { inputRequireMsg, requiredParamKeys } from 'lib/constants';
import { setParams } from 'modules/selectedParams';
import { FlexCenterColumn, FlexCenterRow } from 'styles/commonStyles';
import { getDataRequest } from 'modules/insightData';
import RequiredFields from './RequiredFields';
import OptionalFields from './OptionalFields';

export default function FieldContainer(): JSX.Element {
  const { selectedParams: params } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const formOnChangeHandler: HandlerCallback = (key, value) => {
    dispatch(setParams(key, value));
  };

  const searchButtonHandler = () => {
    const isValid = requiredParamKeys.every(field => params[field].length > 0);

    if (isValid) {
      dispatch(getDataRequest(params));
    } else {
      notification.error({
        duration: 2,
        message: inputRequireMsg,
      });
    }
  };

  return (
    <StyledWrapper>
      <StyledFields>
        <h1>필수 항목</h1>
        <RequiredFields params={params} handler={formOnChangeHandler} />
      </StyledFields>
      <StyledFields>
        <h1>선택 항목</h1>
        <OptionalFields params={params} handler={formOnChangeHandler}>
          <Button
            type="primary"
            icon={<SearchOutlined />}
            size="large"
            onClick={searchButtonHandler}
            style={{ width: 118 }}
          >
            Search
          </Button>
        </OptionalFields>
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
