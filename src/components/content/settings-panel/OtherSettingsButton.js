import React from 'react';
import { useDispatch } from 'react-redux';
import { showAddSettingsPanel } from '../../../redux/actions';
const OtherSettingsButton = () => {
  const dispatch = useDispatch();
  return (
    <div className="settings-panel__other-settings-button">
      <button
        onClick={() => {
          dispatch(showAddSettingsPanel());
        }}
      >
        Дополнительно
      </button>
    </div>
  );
};

export default OtherSettingsButton;
