import React from 'react';
import Radius from './Radius';
import Sort from './Sort';
import TimeBounds from './TimeBounds';
import OtherSettingsButton from './OtherSettingsButton';
import Submit from './Submit';

const SettingsPanel = () => {
  return (
    <div className="settings-panel">
      <Radius />
      <Sort />
      <TimeBounds />
      <OtherSettingsButton />
      <Submit />
    </div>
  );
};

export default SettingsPanel;
