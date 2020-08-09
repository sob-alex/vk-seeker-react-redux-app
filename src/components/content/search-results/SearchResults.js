import React from 'react';
import SearchModalPanel from './SearchModalPanel';
import { useDispatch, useSelector } from 'react-redux';
import { hideSearchResultsPanel, addPartDataToDisplay } from '../../../redux/actions';
import { getDateForResults, chooseSize } from '../../../utils';
import Tile from './Tile';
const SearchResults = () => {
  const dispatch = useDispatch();

  // dispatch(addPartDataToDisplay());
  const photoToDisplay = useSelector((state) => state.data.photoToDisplay);
  const params = useSelector((state) => state.params);
  const showModal = useSelector((state) => state.app.is_search_results_modal_shown);
  const showScroll = useSelector((state) => state.app.is_scroll_shown);

  return (
    <div className="search-results-panel" style={{ overflow: showScroll ? 'auto' : 'hidden' }}>
      <div className="search-results-panel__row">
        {photoToDisplay.map((el) => {
          if (el.lat) {
            let name;
            if (el.addInfo.first_name) name = `${el.addInfo.first_name} ${el.addInfo.last_name}`;
            else name = `${el.addInfo.name}`;
            return (
              <Tile
                key={Math.random()}
                numberId={el.numberId}
                name={name}
                datee={getDateForResults(el.date)}
                src={chooseSize(el.sizes, params.resolution)}
                ownIds={[el.owner_id, el.id]}
              />
            );
          }
          return null;
        })}
      </div>
      {showModal ? <SearchModalPanel /> : null}
    </div>
  );
};

export default SearchResults;
