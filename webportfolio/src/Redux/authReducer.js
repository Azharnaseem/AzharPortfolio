import { LOGIN, LOGOUT } from "./ActionTypes";

const initialState = {
  user: null,
  isLogin: false,
};

export const User = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        user: action.payload,
        islogin: true,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        user: null,
      };
    }
    default: {
      return state;
    }
  }
};
