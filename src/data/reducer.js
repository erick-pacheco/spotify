import {
  AUTH_SET_TOKEN,
  AUTH_SET_USER,
  SIDE_MENU_TOGGLE,
  SPOTIFY_SET_PLAYLIST,
} from "./action.types";

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_SET_USER:
      return {
        ...state,
        user: payload,
      };
    case AUTH_SET_TOKEN:
      return {
        ...state,
        token: payload,
      };
    case SPOTIFY_SET_PLAYLIST:
      return {
        ...state,
        playlist: payload,
      };
    case SIDE_MENU_TOGGLE:
      return {
        ...state,
        sideMenuOpen: payload,
      };
    default:
      return state;
  }
};

export default reducer;
