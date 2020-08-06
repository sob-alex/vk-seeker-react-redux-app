import React from 'react';
import { useDispatch } from 'react-redux';
import { hideSearchResultsPanel } from '../../../redux/actions';
const CloseResults = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="search-results-panel__close-panel"
      onClick={() => dispatch(hideSearchResultsPanel())}
    >
      Скрыть результаты
    </div>
  );
};

export default CloseResults;
