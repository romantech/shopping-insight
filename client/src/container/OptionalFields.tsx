import React from 'react';
import {
  ageList,
  deviceList,
  genderList,
  OPTIONAL_FIELD_TXT,
} from 'lib/constants';
import RadioButton from 'components/forms/RadioButton';
import GroupCheckbox from 'components/forms/GroupCheckbox';
import { StyledFieldWrapper } from './RequiredFields';
import { EmptyElement } from '../styles/commonStyles';

interface OptionalFieldsProps {
  params: OptionalParams;
  handler: InsightParamsHandler;
  children?: React.ReactNode;
}

export default function OptionalFields({
  params,
  handler,
  children,
}: OptionalFieldsProps): JSX.Element {
  return (
    <StyledFieldWrapper>
      <h1>{OPTIONAL_FIELD_TXT}</h1>
      <GroupCheckbox
        value={params.ages as Ages[]}
        options={ageList}
        callback={handler}
        paramKey="ages"
      />
      <RadioButton
        value={params.gender as Gender}
        options={genderList}
        callback={handler}
        paramKey="gender"
      />
      <RadioButton
        value={params.device as Device}
        options={deviceList}
        callback={handler}
        paramKey="device"
      />
      {children}
      <EmptyElement padding="0 0.8rem 0 0" height="100%" />
    </StyledFieldWrapper>
  );
}
