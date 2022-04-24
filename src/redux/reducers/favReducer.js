import types from "../types";

const initialState = [];
function CharacterReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_FAVORITE:
      return [...state, action.payload];
    case types.REMOVE_FAVORITE:
      const results = state.filter(
        (element) => element.name !== action.payload.name
      );

      return results;

    default:
      return state;
  }
}

export default CharacterReducer;
