import React from 'react';
import PlaceMap from './place-map/PlaceMap';
import SettingsPanel from './settings-panel/SettingsPanel';
import SearchResults from './search-results/SearchResults';
import { useSelector } from 'react-redux';
const Content = () => {
  const showResults = useSelector((state) => state.app.is_search_results_panel_shown);
  return (
    <div className="content">
      <PlaceMap />
      <SettingsPanel />
      {showResults ? <SearchResults /> : null}
    </div>
  );
};

export default Content;
