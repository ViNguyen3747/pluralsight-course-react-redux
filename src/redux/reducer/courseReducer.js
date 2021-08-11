import * as types from "../actions/actionTypes";

export default function coursesReducer(State = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...State, { ...action.course }];
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return State;
  }
}
