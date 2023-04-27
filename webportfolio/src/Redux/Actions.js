import { LOGIN } from "./ActionTypes";

export const userLogin = (data) => async (dispatch) => {
  dispatch({
    type: LOGIN,
    payload: data,
  });
};

/**
 * @description also removes all key/value pairs in local-storage
 */
