import { AUTH_SET_TOKEN, AUTH_SET_USER } from "./action.types";

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
    default:
      return state;
  }
};

export default reducer;
