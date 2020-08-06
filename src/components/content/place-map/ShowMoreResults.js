import React from 'react';
import { useDispatch } from 'react-redux';
import { addPartDataToDisplay } from '../../../redux/actions';

const ShowMoreResults = () => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(addPartDataToDisplay())}
      className="search-results-panel__show-more"
    >
      Показать еще
    </div>
  );
};

export default ShowMoreResults;
