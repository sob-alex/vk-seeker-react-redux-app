import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeRadius } from '../../../redux/actions';

const Radius = () => {
  const [state, setState] = useState(100);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const radius = +e.target.value;
    setState(radius);
    dispatch(changeRadius(radius));
  };
  return (
    <div className="settings-panel__radius">
      <h2>Выберите радиус поиска:</h2>
      <form>
        <label className="settings-panel__label-container">
          <span>10 метров </span>
          <input
            name="range"
            type="radio"
            checked={state === 10}
            onClick={handleClick}
            value="10"
            data-value="10"
          />
          <span className="settings-panel__label-container--checkmark"></span>
        </label>
        <label className="settings-panel__label-container">
          <span>100 метров </span>
          <input
            name="range"
            type="radio"
            checked={state === 100}
            onClick={handleClick}
            value="100"
            data-value="100"
          />
          <span className="settings-panel__label-container--checkmark"></span>
        </label>
        <label className="settings-panel__label-container">
          <span>800 метров </span>
          <input
            name="range"
            type="radio"
            checked={state === 800}
            onClick={handleClick}
            value="800"
            data-value="800"
          />
          <span className="settings-panel__label-container--checkmark"></span>
        </label>
        <label className="settings-panel__label-container">
          <span>6000 метров </span>
          <input
            name="range"
            type="radio"
            checked={state === 6000}
            onClick={handleClick}
            value="6000"
            data-value="6000"
          />
          <span className="settings-panel__label-container--checkmark"></span>
        </label>
        <label className="settings-panel__label-container">
          <span>50000 метров </span>
          <input
            name="range"
            type="radio"
            checked={state === 50000}
            onClick={handleClick}
            value="50000"
            data-value="50000"
          />
          <span className="settings-panel__label-container--checkmark"></span>
        </label>
      </form>
    </div>
  );
};

export default Radius;
