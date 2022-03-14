import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { RootState } from 'modules';
import {
  OPTIONAL_FIELD_TXT,
  REQUIRED_FIELD_TXT,
  SEARCH_BTN_TXT,
} from 'lib/constants';
import { setInsightParams } from 'modules/insightParams';
import {
  FlexCenterColumn,
  FlexCenterRow,
  InfinitySansBold,
} from 'styles/commonStyles';
import { getInsightDataRequest } from 'modules/insightData';
import RequiredFields from 'container/RequiredFields';
import OptionalFields from 'container/OptionalFields';

interface FieldContainerProps {
  isLoading: boolean;
}

export default function FieldContainer({
  isLoading,
}: FieldContainerProps): JSX.Element {
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
      const payload = { ...requiredParams, ...optionalParams };
      dispatch(getInsightDataRequest(payload));
    }
  };

  return (
    <StyledWrapper>
      <StyledFields>
        <h1>{REQUIRED_FIELD_TXT}</h1>
        <RequiredFields params={requiredParams} handler={onChangeHandler} />
      </StyledFields>
      <StyledFields>
        <h1>{OPTIONAL_FIELD_TXT}</h1>
        <OptionalFields params={optionalParams} handler={onChangeHandler}>
          <Button
            type="primary"
            icon={<SearchOutlined />}
            size="large"
            disabled={!isValid || isLoading}
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

const StyledWrapper = styled.div`
  ${FlexCenterColumn};
  width: 100%;
  gap: 2rem;

  h1 {
    ${InfinitySansBold};
    min-width: fit-content;
    text-align: right;
    font-size: 1.8rem;
  }
`;
const StyledFields = styled.div`
  ${FlexCenterRow};
  gap: 3rem;
`;
