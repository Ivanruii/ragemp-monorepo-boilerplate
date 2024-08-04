import { CONTEXTS, SOURCES } from "../common/enums";

enum LOGIN_ACTIONS {
  RECEIVE_DATA = "receiveData",
}

export const SERVER_EVENTS = {
  //  `source::context::action`
  LOGIN: {
    RECEIVE_DATA: `${SOURCES.SERVER}::${CONTEXTS.LOGIN}::${LOGIN_ACTIONS.RECEIVE_DATA}`,
  },
};
