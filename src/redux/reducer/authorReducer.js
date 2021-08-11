import * as types from "../actions/actionTypes";

export default function authorReducer(State = [], action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return State;
  }
}
