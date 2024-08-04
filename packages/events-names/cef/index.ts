import { CONTEXTS, SOURCES } from "../common/enums";

enum LOGIN_ACTIONS {
  RESPONSE = "response",
}

enum UI_ACTIONS {
  PAGE_MANAGER = "pageManager",
}

export const CEF_EVENTS = {
  //  `source::context::action`
  LOGIN: {
    RESPONSE: `${SOURCES.CEF}::${CONTEXTS.LOGIN}::${LOGIN_ACTIONS.RESPONSE}`,
  },
  UI: {
    PAGE_MANAGER: `${SOURCES.CEF}::${CONTEXTS.UI}::${UI_ACTIONS.PAGE_MANAGER}`,
  },
};
