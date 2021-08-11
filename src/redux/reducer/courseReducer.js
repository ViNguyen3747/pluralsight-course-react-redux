import * as types from "../actions/actionTypes";
import initialState from "./initialState";
export default function coursesReducer(State = initialState.courses, action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...State, { ...action.course }];
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return State;
  }
}
