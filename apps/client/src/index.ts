import rpc from "rage-rpc";

const browser = mp.browsers.new("package://cef/index.html");

mp.events.add("client::login::display", (value: boolean) => {
  rpc
    .callBrowser(browser, "cef::ui::pageManager", {
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
  "client::login::sendData",
  (data: { username: string; password: string }) => {
    mp.events.callRemote(
      "server::login::receiveData",
      data.username,
      data.password
    );
  }
);
