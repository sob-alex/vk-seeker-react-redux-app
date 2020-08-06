import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleImageResolution } from '../../../redux/actions';

const Resolution = () => {
  const paramsState = useSelector((state) => state.params.resolution);
  const [state, setState] = useState(paramsState);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    setState(!state);
    dispatch(toggleImageResolution());
  };
  return (
    <div className="add-settings-panel__resolution">
      <form>
        <label className="add-settings-panel__label-container">
          Понизить разрешение картинок <br />
          (возможно будет лучше производительность)
          <input type="checkbox" onClick={handleClick} checked={state} />
          <span className="add-settings-panel__label-container--checkmark-checkbox"></span>
        </label>
      </form>
    </div>
  );
};

export default Resolution;
