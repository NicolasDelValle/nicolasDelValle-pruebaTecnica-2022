import types from "../types";
const nameInitialState = 1;
function PageReducer(state = nameInitialState, action) {
  switch (action.type) {
    case types.SET_PAGE:
      return action.payload;
    default:
      return state;
  }
}

export default PageReducer;
