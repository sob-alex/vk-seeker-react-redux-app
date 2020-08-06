import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeSort } from '../../../redux/actions';

const Sort = () => {
  const [state, setState] = useState(0);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const sort = +e.target.value;
    setState(sort);
    dispatch(changeSort(sort));
  };
  return (
    <div className="settings-panel__sort">
      <h2>Сортировка результатов:</h2>
      <form>
        <label className="settings-panel__label-container">
          <span>По лайкам</span>
          <input type="radio" name="sort" onClick={handleClick} value="1" checked={state == 1} />
          <span className="settings-panel__label-container--checkmark"></span>
        </label>
        <label className="settings-panel__label-container">
          <span>По дате</span>
          <input type="radio" name="sort" onClick={handleClick} value="0" checked={state == 0} />
          <span className="settings-panel__label-container--checkmark"></span>
        </label>
      </form>
    </div>
  );
};

export default Sort;
