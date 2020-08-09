import {
  SHOW_ADD_SETTINGS,
  HIDE_ADD_SETTINGS,
  SHOW_RESULTS_PANEL,
  HIDE_RESULTS_PANEL,
  SHOW_RESULTS_MODAL,
  HIDE_RESULTS_MODAL,
  TOGGLE_SCROLL,
  SHOW_ERROR_WINDOW,
  HIDE_ERROR_WINDOW,
  SHOW_AUTH_FORM,
} from './types';

const initialState = {
  is_add_settings_panel_shown: false,
  is_search_results_panel_shown: false,
  is_search_results_modal_shown: false,
  is_scroll_shown: true,
  is_error_window_shown: false,
  is_auth_form_shown: false,
  error_info: null,
  modal_data: null,
};

export const appReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SHOW_ADD_SETTINGS:
      return { ...state, is_add_settings_panel_shown: true };
    case HIDE_ADD_SETTINGS:
      return { ...state, is_add_settings_panel_shown: false };
    case SHOW_RESULTS_PANEL:
      return { ...state, is_search_results_panel_shown: true };
    case HIDE_RESULTS_PANEL:
      return { ...state, is_search_results_panel_shown: false };
    case SHOW_RESULTS_MODAL:
      return { ...state, is_search_results_modal_shown: true, modal_data: action.payload };
    case HIDE_RESULTS_MODAL:
      return { ...state, is_search_results_modal_shown: false };
    case TOGGLE_SCROLL:
      return { ...state, is_scroll_shown: !state.is_scroll_shown };
    case SHOW_ERROR_WINDOW:
      return { ...state, is_error_window_shown: true, error_info: action.payload };
    case HIDE_ERROR_WINDOW:
      return { ...state, is_error_window_shown: false };
    case SHOW_AUTH_FORM:
      return { ...state, is_auth_form_shown: true };

    default:
      return state;
  }
};
