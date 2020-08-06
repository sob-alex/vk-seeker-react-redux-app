import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeGroupCity } from '../../../../redux/actions';

const City = () => {
  const paramsState = useSelector((state) => state.params.cityGroup);
  const [city, setCity] = useState(paramsState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const handleBlur = (e) => {
    const city = e.target.value.trim();
    dispatch(changeGroupCity(city));
  };
  return (
    <div className="add-settings-panel__group-filters--city">
      <p>Город:</p>
      <input type="text" name="word" onChange={handleChange} onBlur={handleBlur} value={city} />
    </div>
  );
};

export default City;
