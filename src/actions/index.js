export const ACTIONS = {
  SET_MODALSTATUS: "SET_MODALSTATUS",
  SET_CATEGORIES: "SET_CATEGORIES",
};

export const Actions = {
  setModalStatus: (status) => {
    return {
      type: ACTIONS.SET_MODALSTATUS,
      payload: status,
    };
  },
  setCategories: (categories) => {
    return {
      type: ACTIONS.SET_CATEGORIES,
      payload: categories,
    };
  },
};
