import {
  AUTH_SET_TOKEN,
  AUTH_SET_USER,
  SIDE_MENU_TOGGLE,
  SPOTIFY_SET_PLAYLIST,
  SET_SEARCH_RESULTS,
} from "./action.types";

const reducer = (state, action) => {
  switch (action.type) {
    case AUTH_SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case AUTH_SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case SPOTIFY_SET_PLAYLIST:
      return {
        ...state,
        playlist: action.payload,
      };
    case SIDE_MENU_TOGGLE:
      return {
        ...state,
        sideMenuOpen: action.payload,
      };
    case SET_SEARCH_RESULTS:
      console.log(action.payload);
      return {
        ...state,
        searchList: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
