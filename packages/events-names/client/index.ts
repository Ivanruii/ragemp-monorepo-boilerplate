import { CONTEXTS, SOURCES } from "../common/enums";

enum LOGIN_ACTIONS {
  DISPLAY = "display",
  SEND_DATA = "sendData",
}

export const CLIENT_EVENTS = {
  //  `source::context::action`
  LOGIN: {
    DISPLAY: `${SOURCES.CLIENT}::${CONTEXTS.LOGIN}::${LOGIN_ACTIONS.DISPLAY}`,
    SEND_DATA: `${SOURCES.CLIENT}::${CONTEXTS.LOGIN}::${LOGIN_ACTIONS.SEND_DATA}`,
  },
};
