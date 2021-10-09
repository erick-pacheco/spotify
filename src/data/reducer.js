import { AUTH_SET_USER } from "./action.types";

const reducer = (state, action) => {
  switch (action.type) {
    case AUTH_SET_USER:
      return {
        state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
