import {
  CHANGE_RADIUS,
  CHANGE_SORT,
  CHANGE_END_SEARCH_TIME,
  CHANGE_START_SEARCH_TIME,
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
} from './types';
import '../getToken';
const initialState = {
  token: localStorage.getItem('token'),
  radius: 100, //10, 100, 800, 6000, 50000
  lat: 52,
  long: 87,
  sort: 0, //1 — по количеству отметок «Мне нравится»  0 — по дате добавления фотографии.
  offset: 0,
  count: 100, //max =1000
  search: '',
  start_time: ``,
  end_time: ``,
  add: true,
  type: 0, // all - 0, users - 1,groups - 2
  age_from: 0,
  age_to: 100,
  sex: -1, // -1 - all, 1 - women, 2 -men
  common_count: false, //общие друзья
  relation: -1, // -1 - любой,  1 — не женат/не замужем;  2 — есть друг/есть подруга;  3 — помолвлен/помолвлена;  4 — женат/замужем;  5 — всё сложно;  6 — в активном поиске;  7 — влюблён/влюблена; 8 — в гражданском браке; 0 — не указано.
  cityHuman: '', // 0 - не указано
  cityGroup: '', // 0 - не указано
  countMembers_from: 0,
  countMembers_to: 10000000,
  resolution: true,
};

export const paramsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COORDS:
      return { ...state, lat: action.payload.lat, long: action.payload.lng };
    case CHANGE_RADIUS:
      return { ...state, radius: action.payload };
    case CHANGE_SORT:
      return { ...state, sort: action.payload };
    case CHANGE_START_SEARCH_TIME:
      return { ...state, start_time: action.payload };
    case CHANGE_END_SEARCH_TIME:
      return { ...state, end_time: action.payload };
    case CHANGE_WORD_SEARCH:
      return { ...state, search: action.payload };
    case CHANGE_TYPE_SEARCH:
      return { ...state, type: action.payload };
    case TOGGLE_EXT_SEARCH:
      return { ...state, add: !state.add };
    case CHANGE_SEARCH_DEPTH:
      return { ...state, count: action.payload };
    case TOGGLE_IMAGE_RESOLUTION:
      return { ...state, resolution: !state.resolution };
    case CHANGE_SEX:
      return { ...state, sex: action.payload };
    case CHANGE_AGE:
      return { ...state, age_from: action.payload.from, age_to: action.payload.to };
    case CHANGE_CITY:
      return { ...state, cityHuman: action.payload };
    case CHANGE_RELATION:
      return { ...state, relation: action.payload };
    case TOGGLE_COMMON_FRIEND:
      return { ...state, common_count: !state.common_count };
    case CHANGE_GROUP_CITY:
      return { ...state, cityGroup: action.payload };
    case CHANGE_MEMBERS_COUNT:
      return {
        ...state,
        countMembers_from: action.payload.from,
        countMembers_to: action.payload.to,
      };
    default:
      return state;
  }
};
