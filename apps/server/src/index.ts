import { authenticate } from "./core/database/connection.database";

authenticate();

mp.events.add("playerReady", (player) => {
  player.call("client::login::display", [true]);
});

mp.events.add("server::login::receiveData", (player, username, password) => {
  console.log(
    `Received login data from ${player.name}: ${username}, ${password}`
  );

  if (username === "test" && password === "test") {
    player.outputChatBox("Login successful");
    player.call("client::login::display", [false]);
    player.call("cef::login::response", ["Login successful"]);
  } else {
    player.outputChatBox("Login failed");
    player.call("cef::login::response", ["Login failed"]);
  }
});
