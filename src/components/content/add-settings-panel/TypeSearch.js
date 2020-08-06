import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTypeSearch } from '../../../redux/actions';

const TypeSearch = () => {
  const type = useSelector((state) => state.params.type);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const type = +e.target.value;
    dispatch(changeTypeSearch(type));
  };

  return (
    <div className="add-settings-panel__type-search">
      <form>
        <label className="add-settings-panel__label-container">
          Все
          <input
            type="radio"
            name="type-search"
            value="0"
            onClick={handleClick}
            checked={type === 0}
          />
          <span className="add-settings-panel__label-container--checkmark"></span>
        </label>
        <label className="add-settings-panel__label-container">
          Фото пользователей
          <input
            type="radio"
            name="type-search"
            value="1"
            onClick={handleClick}
            checked={type === 1}
          />
          <span className="add-settings-panel__label-container--checkmark"></span>
        </label>
        <label className="add-settings-panel__label-container">
          Фото групп
          <input
            name="type-search"
            type="radio"
            value="2"
            onClick={handleClick}
            checked={type === 2}
          />
          <span className="add-settings-panel__label-container--checkmark"></span>
        </label>
      </form>
    </div>
  );
};

export default TypeSearch;
