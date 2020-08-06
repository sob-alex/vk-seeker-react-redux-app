import { LOAD_DATA, ADD_PART_DATA_TO_DISPLAY, CLEAR_DATA_FROM_CONTAINER } from './types';

const initialState = {
  photos: [],
  photoToDisplay: [],
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return { ...state, photos: action.payload };
    case ADD_PART_DATA_TO_DISPLAY:
      const toDisplay = state.photos.slice(0, 50);
      const toPhotos = state.photos.slice(50);
      return {
        ...state,
        photoToDisplay: [...state.photoToDisplay, ...toDisplay],
        photos: toPhotos,
      };
    case CLEAR_DATA_FROM_CONTAINER:
      return { photos: [], photoToDisplay: [] };
    default:
      return state;
  }
};
