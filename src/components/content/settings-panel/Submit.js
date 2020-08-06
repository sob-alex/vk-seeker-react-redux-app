import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../../../redux/actions';

const Submit = () => {
  const dispatch = useDispatch();
  const params = useSelector((state) => state.params);

  return (
    <div className="settings-panel__submit">
      <button onClick={() => dispatch(fetchPhotos(params))}>Поиск</button>
    </div>
  );
};

export default Submit;
