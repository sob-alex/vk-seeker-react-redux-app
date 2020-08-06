import React from 'react';
import { useDispatch } from 'react-redux';
import { hideAddSettingsPanel } from '../../../redux/actions';
import TypeSearch from './TypeSearch';
import ExtendedSearch from './ExtendedSearch';
import CountOfResults from './CountOfResults';
import Resolution from './Resolution';
import Sex from './human-filters/Sex';
import Age from './human-filters/Age';
import City from './human-filters/City';
import Relation from './human-filters/Relation';
import CommonFriends from './human-filters/CommonFriends';
import CityForGroup from './group-filters/CityForGroup';
import MembersCount from './group-filters/MembersCount';
const AddSettingsPanel = () => {
  const dispatch = useDispatch();
  return (
    <div className="add-settings-panel">
      <div className="add-settings-panel__close" onClick={() => dispatch(hideAddSettingsPanel())}>
        &times;
      </div>
      <div className="add-settings-panel__main-filters-flex">
        <div className="add-settings-panel__main-filters-flex--left-side">
          <TypeSearch />
          <ExtendedSearch />
        </div>
        <div className="add-settings-panel__main-filters-flex--right-side">
          <CountOfResults />
          <Resolution />
        </div>
      </div>

      <div className="add-settings-panel__filters-flex">
        <div className="add-settings-panel__human-filters">
          <h2>Фильтр пользователей:</h2>
          <Sex />
          <Age />
          <City />
          <Relation />
          <CommonFriends />
        </div>
        <div className="add-settings-panel__group-filters">
          <h2>Групповой фильтр:</h2>
          <hr />
          <CityForGroup />
          <MembersCount />
        </div>
      </div>
    </div>
  );
};

export default AddSettingsPanel;
