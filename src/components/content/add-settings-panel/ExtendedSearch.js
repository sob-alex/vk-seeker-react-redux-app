import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleExtSearch } from '../../../redux/actions';

const ExtendedSearch = () => {
  const state = useSelector((state) => state.params.add);

  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(toggleExtSearch());
  };
  return (
    <div className="add-settings-panel__is-extended">
      <form>
        <label className="add-settings-panel__label-container">
          Расширенный поиск
          <input type="checkbox" onClick={handleClick} checked={state} />
          <span className="add-settings-panel__label-container--checkmark-checkbox"></span>
        </label>
      </form>
    </div>
  );
};

export default ExtendedSearch;
