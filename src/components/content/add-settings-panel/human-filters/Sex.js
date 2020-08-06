import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSex } from '../../../../redux/actions';
const Sex = () => {
  const paramsState = useSelector((state) => state.params.sex);
  const [sex, setSex] = useState(paramsState);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const sex = +e.target.value;

    setSex(sex);
    dispatch(changeSex(sex));
  };
  return (
    <div className="add-settings-panel__human-filters--sex">
      <hr />
      <p>Искать:</p>

      <form>
        <label className="add-settings-panel__label-container">
          Всех
          <input value="-1" name="sex" type="radio" onClick={handleClick} checked={sex === -1} />
          <span className="add-settings-panel__label-container--checkmark"></span>
        </label>
        <label className="add-settings-panel__label-container">
          Мужчин
          <input value="2" name="sex" type="radio" onClick={handleClick} checked={sex === 2} />
          <span className="add-settings-panel__label-container--checkmark"></span>
        </label>
        <label className="add-settings-panel__label-container">
          Женщин
          <input value="1" name="sex" type="radio" onClick={handleClick} checked={sex === 1} />
          <span className="add-settings-panel__label-container--checkmark"></span>
        </label>
      </form>
    </div>
  );
};

export default Sex;
