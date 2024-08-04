import rpc from "rage-rpc";
import { CLIENT_EVENTS, SERVER_EVENTS, CEF_EVENTS } from "@repo/events-names";

const browser = mp.browsers.new("package://cef/index.html");

mp.events.add(CLIENT_EVENTS.LOGIN.DISPLAY, (value: boolean) => {
  rpc
    .callBrowser(browser, CEF_EVENTS.UI.PAGE_MANAGER, {
      page: "login",
      value: value,
    })
    .then(() => {
      mp.gui.chat.push(`Login page shown`);
    })
    .catch((err) => {
      console.error("Failed to show login page:", err);
    });
});

rpc.register(
  CLIENT_EVENTS.LOGIN.SEND_DATA,
  (data: { username: string; password: string }) => {
    mp.events.callRemote(
      SERVER_EVENTS.LOGIN.RECEIVE_DATA,
      data.username,
      data.password
    );
  }
);
