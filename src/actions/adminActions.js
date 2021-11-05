import axios from "axios";
import {
  ADMIN_lOGIN_FAIL,
  ADMIN_lOGIN_REQUEST,
  ADMIN_lOGIN_SUCCESS,
  ADMIN_REGISTER_FAIL,
  ADMIN_REGISTER_REQUEST,
  ADMIN_REGISTER_SUCCESS,
} from "../constants/adminConstants";

export const register = (name, email, password, pic) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_REGISTER_REQUEST });

    const { data } = await axios.post("http://localhost:5000/api/admin", {
      name,
      email,
      password,
      pic,
    });
    dispatch({ type: ADMIN_REGISTER_SUCCESS, payload: data });
    dispatch({ type: ADMIN_lOGIN_SUCCESS, payload: data });
    localStorage.setItem("adminInfo", JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ADMIN_REGISTER_FAIL,
      payload: message,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_lOGIN_REQUEST });

    const { data } = await axios.post("http://localhost:5000/api/admin/login", {
      email,
      password,
    });
    dispatch({ type: ADMIN_lOGIN_SUCCESS, payload: data });
    localStorage.setItem("adminInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ADMIN_lOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
