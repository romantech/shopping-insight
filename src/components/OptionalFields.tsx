import React, { ReactElement } from 'react';
import { ageList, deviceList, genderList } from '../lib/constants';
import RadioButton from './forms/RadioButton';
import GroupCheckbox from './forms/GroupCheckbox';

interface OptionalFieldsProps {
  params: OptionalParams;
  handler: HandlerCallback;
  children?: ReactElement;
}

export default function OptionalFields({
  params,
  handler,
  children,
}: OptionalFieldsProps): JSX.Element {
  return (
    <div>
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
    </div>
  );
}
