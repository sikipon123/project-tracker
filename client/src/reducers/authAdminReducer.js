import isEmpty from '../validation/is-empty';
import {SET_CURRENT_ADMIN,GET_PROJECTS,GET_INSTRUCTORS,GET_STUDENTS,GET_ERRORS} from '../actions/types';

const initialState = {
  isAuthenticated: false,
  admin: {},
  projects: [],
  instructors: [],
  students: []
};

const authAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_ADMIN:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        admin: action.payload
      };
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      };
    case GET_INSTRUCTORS:
      return {
        ...state,
        instructors: action.payload
      };
    case GET_STUDENTS:
      return {
        ...state,
        students: action.payload
      };
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload
      };
    default:
      return state;
  }
};
export default authAdminReducer;