import {
  ADMIN_lOGIN_FAIL,
  ADMIN_lOGIN_REQUEST,
  ADMIN_lOGIN_SUCCESS,
  ADMIN_lOGOUT,
  ADMIN_REGISTER_FAIL,
  ADMIN_REGISTER_REQUEST,
  ADMIN_REGISTER_SUCCESS,
} from "../constants/adminConstants";

export const adminRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_REGISTER_REQUEST:
      return { loading: true };
    case ADMIN_REGISTER_SUCCESS:
      return { loading: false, adminInfo: action.payload };
    case ADMIN_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const adminLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_lOGIN_REQUEST:
      return { loading: true };
    case ADMIN_lOGIN_SUCCESS:
      return { loading: true, adminInfo: action.payload };
    case ADMIN_lOGIN_FAIL:
      return { loading: false, error: action.payload };
    case ADMIN_lOGOUT:
      return {};
    default:
      return state;
  }
};
