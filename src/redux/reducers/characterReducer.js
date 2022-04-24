import types from "../types";

const initialState = null;
function CharacterReducer(state = initialState, action) {
  switch (action.type) {
    case types.FILL_CHARACTERS:
      return action.payload;
    case types.CLEAR_CHARACTERS:
      return initialState;
    default:
      return state;
  }
}

export default CharacterReducer;
