import types from "../types";

const actions = {
  setPage: (page) => {
    return { type: types.SET_PAGE, payload: page };
  },
};

export default actions;
