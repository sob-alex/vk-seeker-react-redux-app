import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideErrorWindow } from '../../../redux/actions';
const ErrorWindow = () => {
  const errMsg = useSelector((state) => state.app.error_info);
  const dispatch = useDispatch();
  return (
    <div className="place-map__error-window">
      <div className="place-map__error-window--inner">
        <i
          onClick={() => dispatch(hideErrorWindow())}
          className="material-icons place-map__error-window--inner--close"
        >
          close
        </i>
        <h2>Произошла ошибка</h2>
        <h4>{errMsg}</h4>
        <p></p>
      </div>
    </div>
  );
};

export default ErrorWindow;
