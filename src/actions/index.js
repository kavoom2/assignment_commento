export const ACTIONS = {
  SET_MODALSTATUS: "SET_MODALSTATUS",
};

export const Actions = {
  setModalStatus: (status) => {
    return {
      type: ACTIONS.SET_MODALSTATUS,
      payload: status,
    };
  },
};
