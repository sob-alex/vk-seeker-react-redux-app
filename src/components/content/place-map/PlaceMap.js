import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Map from './Map';
import AddSettingsPanel from '../add-settings-panel/AddSettingsPanel';
import SearchSityPanel from './SearchSityPanel';
import AuthorizationForm from './AuthorizationForm';
import ErrorWindow from './ErrorWindow';
import { showSearchResultsPanel, hideSearchResultsPanel } from '../../../redux/actions';
import CloseResults from './CloseResults';
import ShowMoreResults from './ShowMoreResults';

const PlaceMap = () => {
  const addSetPanel = useSelector((state) => state.app.is_add_settings_panel_shown);
  const errorWindow = useSelector((state) => state.app.is_error_window_shown);
  const authForm = useSelector((state) => state.app.is_auth_form_shown);
  const searchModal = useSelector((state) => state.app.is_search_results_modal_shown);
  const searchResultsPanel = useSelector((state) => state.app.is_search_results_panel_shown);
  const photos = useSelector((state) => state.data.photos);
  const token = useSelector((state) => state.params.token);
  console.log(token);
  const dispatch = useDispatch();

  return (
    <div className="place-map">
      <Map />
      {/* <SearchSityPanel /> */}
      <div
        className="place-map__open-search-result-panel"
        onClick={() => dispatch(showSearchResultsPanel())}
      >
        Показать результаты
      </div>
      <SearchSityPanel/>
      {searchResultsPanel && !searchModal ? <CloseResults /> : null}
      {searchResultsPanel && photos.length && !searchModal ? <ShowMoreResults /> : null}
      {!authForm ? null : <AuthorizationForm />}
      {errorWindow ? <ErrorWindow /> : null}
      {addSetPanel ? <AddSettingsPanel /> : null}
    </div>
  );
};

export default PlaceMap;
