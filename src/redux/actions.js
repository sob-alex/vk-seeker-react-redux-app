import request from '../requests/requests';
import { addMarkersToMap, setView } from '../map';
import {changeToDot} from '../utils'
import {
  SHOW_ADD_SETTINGS,
  HIDE_ADD_SETTINGS,
  SHOW_RESULTS_PANEL,
  HIDE_RESULTS_PANEL,
  CHANGE_RADIUS,
  CHANGE_SORT,
  CHANGE_START_SEARCH_TIME,
  CHANGE_END_SEARCH_TIME,
  CHANGE_WORD_SEARCH,
  CHANGE_TYPE_SEARCH,
  TOGGLE_EXT_SEARCH,
  CHANGE_SEARCH_DEPTH,
  TOGGLE_IMAGE_RESOLUTION,
  CHANGE_SEX,
  CHANGE_AGE,
  CHANGE_CITY,
  CHANGE_RELATION,
  TOGGLE_COMMON_FRIEND,
  CHANGE_GROUP_CITY,
  CHANGE_MEMBERS_COUNT,
  CHANGE_COORDS,
  LOAD_DATA,
  SHOW_RESULTS_MODAL,
  HIDE_RESULTS_MODAL,
  TOGGLE_SCROLL,
  ADD_PART_DATA_TO_DISPLAY,
  SHOW_ERROR_WINDOW,
  HIDE_ERROR_WINDOW,
  SHOW_AUTH_FORM,
  CLEAR_DATA_FROM_CONTAINER,
  FETCH_CITY_COORDS,
} from './types';

export const showAddSettingsPanel = () => ({ type: SHOW_ADD_SETTINGS });
export const hideAddSettingsPanel = () => ({ type: HIDE_ADD_SETTINGS });
export const showSearchResultsPanel = () => ({ type: SHOW_RESULTS_PANEL });
export const hideSearchResultsPanel = () => ({ type: HIDE_RESULTS_PANEL });
export const showSearchModal = (target) => (dispatch) => {
  document.body.style.overflow = 'hidden';
  document.getElementsByClassName('header')[0].style.display = 'none';
  dispatch({ type: SHOW_RESULTS_MODAL, payload: target });
  dispatch(toggleScroll());
};
export const hideSearchModal = () => (dispatch) => {
  document.body.style.overflow = 'auto';
  document.getElementsByClassName('header')[0].style.display = '';
  dispatch({ type: HIDE_RESULTS_MODAL });
  dispatch(toggleScroll());
};
export const toggleScroll = () => ({ type: TOGGLE_SCROLL });
export const showErrorWindow = (errorInfo) => ({ type: SHOW_ERROR_WINDOW, payload: errorInfo });
export const hideErrorWindow = () => ({ type: HIDE_ERROR_WINDOW });
export const showAuthForm = () => ({ type: SHOW_AUTH_FORM });
//*****************************
export const changeCoords = (coords) => ({ type: CHANGE_COORDS, payload: coords });
export const changeRadius = (radius) => ({ type: CHANGE_RADIUS, payload: radius });
export const changeSort = (sort) => ({ type: CHANGE_SORT, payload: sort });
export const changeStartTime = (time) => ({ type: CHANGE_START_SEARCH_TIME, payload: time });
export const changeEndTime = (time) => ({ type: CHANGE_END_SEARCH_TIME, payload: time });
export const changeWordSearch = (word) => ({ type: CHANGE_WORD_SEARCH, payload: word });

//*******************************

export const changeTypeSearch = (typeSearch) => ({ type: CHANGE_TYPE_SEARCH, payload: typeSearch });
export const toggleExtSearch = () => ({ type: TOGGLE_EXT_SEARCH });
export const changeSearchDepth = (depth) => ({ type: CHANGE_SEARCH_DEPTH, payload: depth });
export const toggleImageResolution = () => ({ type: TOGGLE_IMAGE_RESOLUTION });

export const changeSex = (sex) => ({ type: CHANGE_SEX, payload: sex });
export const changeAge = (age) => ({ type: CHANGE_AGE, payload: age });
export const changeCity = (city) => ({ type: CHANGE_CITY, payload: city });
export const changeRelation = (relation) => ({ type: CHANGE_RELATION, payload: relation });
export const toggleCommnFriend = () => ({ type: TOGGLE_COMMON_FRIEND });

export const changeGroupCity = (city) => ({ type: CHANGE_GROUP_CITY, payload: city });
export const changeMembersCount = (count) => ({ type: CHANGE_MEMBERS_COUNT, payload: count });

//*****************************

export const fetchPhotos = (params) => async (dispatch) => {
  let res = await request(params, dispatch);
  console.log('Результаты в fetchPhotos:', res);
  if (res) {
    addMarkersToMap(res);
    dispatch({ type: LOAD_DATA, payload: res });
    dispatch(addPartDataToDisplay());
  }
};
export const fetchCityCoodrs = (city) => async (dispatch) =>{
  let response = await fetch(`http://localhost/getCity?city=${city}`);

if (response.ok) {  

  let json = await response.json();
  dispatch({type: FETCH_CITY_COORDS, payload: [json.lat,json.lng]})
  // setView(+changeToDot(json.lat), +changeToDot(json.lng));
} else {
  console.log("Ошибка HTTP: " + response.status);
}
}

export const addPartDataToDisplay = () => ({
  type: ADD_PART_DATA_TO_DISPLAY,
});

export const clearDataFromContainer = () => ({ type: CLEAR_DATA_FROM_CONTAINER });
