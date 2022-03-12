import React from 'react';
import { ageList, deviceList, genderList } from 'lib/constants';
import RadioButton from 'components/forms/RadioButton';
import GroupCheckbox from 'components/forms/GroupCheckbox';

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
