import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { RootState } from 'modules';
import { SEARCH_BTN_TXT } from 'lib/constants';
import { setInsightParams } from 'modules/insightParams';
import { FlexCenterColumn } from 'styles/commonStyles';
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
    <StyledContainer>
      <RequiredFields params={requiredParams} handler={onChangeHandler} />
      <OptionalFields params={optionalParams} handler={onChangeHandler}>
        <Button
          type="primary"
          icon={<SearchOutlined />}
          size="large"
          disabled={!isValid || isLoading}
          onClick={buttonHandler}
          style={{ minWidth: 118 }}
        >
          {SEARCH_BTN_TXT}
        </Button>
      </OptionalFields>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  ${FlexCenterColumn};
  width: 100%;
  gap: 2rem;
`;
