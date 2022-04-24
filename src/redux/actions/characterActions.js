import types from "../types";

const actions = {
  fillCharacters: (characters) => {
    return { type: types.FILL_CHARACTERS, payload: characters };
  },
  clearCharacters: { type: types.CLEAR_CHARACTERS },
  addFav: (character) => {
    return { type: types.ADD_FAVORITE, payload: character };
  },
  removeFav: (character) => {
    return { type: types.REMOVE_FAVORITE, payload: character };
  },
};

export default actions;
