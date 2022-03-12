import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';
import { Button, notification } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { RootState } from 'modules';
import {
  INPUT_REQUIRED_MSG,
  OPTIONAL_FIELD_KO_TXT,
  REQUIRED_FIELD_KO_TXT,
  SEARCH_BTN_TXT,
} from 'lib/constants';
import { setInsightParams } from 'modules/insightParams';
import { FlexCenterColumn, FlexCenterRow } from 'styles/commonStyles';
import { getInsightDataRequest } from 'modules/insightData';
import RequiredFields from 'container/RequiredFields';
import OptionalFields from 'container/OptionalFields';
import { isProd } from 'lib/utils';

export default function FieldContainer(): JSX.Element {
  const dispatch = useDispatch();

  const {
    insightParams: { requiredParams, optionalParams },
  } = useSelector((state: RootState) => state);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(Object.values(requiredParams).every(v => v.length > 0));
  }, [requiredParams]);

  const onChangeHandler: InsightParamsHandler = (paramKey, value) => {
    const paramType =
      paramKey in requiredParams ? 'requiredParams' : 'optionalParams';
    dispatch(setInsightParams(paramType, paramKey, value));
  };

  const buttonHandler = () => {
    if (isValid) {
      dispatch(getInsightDataRequest({ ...requiredParams, ...optionalParams }));
    } else {
      notification.error({
        duration: 2,
        message: INPUT_REQUIRED_MSG,
      });
    }
  };

  return (
    <StyledWrapper>
      <StyledFields>
        <h1>{REQUIRED_FIELD_KO_TXT}</h1>
        <RequiredFields params={requiredParams} handler={onChangeHandler} />
      </StyledFields>
      <StyledFields>
        <h1>{OPTIONAL_FIELD_KO_TXT}</h1>
        <OptionalFields params={optionalParams} handler={onChangeHandler}>
          <Button
            type="primary"
            icon={<SearchOutlined />}
            size="large"
            disabled={isProd || !isValid}
            onClick={buttonHandler}
            style={{ width: 118 }}
          >
            {SEARCH_BTN_TXT}
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
