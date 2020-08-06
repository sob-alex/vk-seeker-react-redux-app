import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCommnFriend } from '../../../../redux/actions';

const CommonFriends = () => {
  const paramsState = useSelector((state) => state.params.common_count);
  const [state, setState] = useState(paramsState);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    setState(!state);
    dispatch(toggleCommnFriend());
  };
  return (
    <div className="add-settings-panel__human-filters--common-friend">
      <label className="add-settings-panel__label-container">
        <p>Искать тех, с кем есть общие друзья</p>
        <input type="checkbox" data-value="false" onClick={handleClick} checked={state} />
        <span className="add-settings-panel__label-container--checkmark-checkbox"></span>
      </label>
    </div>
  );
};

export default CommonFriends;
