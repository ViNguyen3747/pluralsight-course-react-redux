export default function coursesReducer(State = [], action) {
  switch (action.type) {
    case "CREATE_COURSE":
      return [...State, { ...action.course }];
    default:
      return State;
  }
}
