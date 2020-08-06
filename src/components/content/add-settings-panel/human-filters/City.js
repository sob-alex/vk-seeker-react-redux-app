import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCity } from '../../../../redux/actions';

const City = () => {
  const paramsState = useSelector((state) => state.params.cityHuman);
  const [city, setCity] = useState(paramsState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const handleBlur = (e) => {
    const city = e.target.value.trim();
    dispatch(changeCity(city));
  };
  return (
    <div className="add-settings-panel__human-filters--city">
      <p>Укажите город:</p>
      <input type="text" onChange={handleChange} onBlur={handleBlur} value={city} />
    </div>
  );
};

export default City;
