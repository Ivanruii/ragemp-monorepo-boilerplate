import { authenticate } from "./core/database/connection.database";
import { SERVER_EVENTS, CLIENT_EVENTS, CEF_EVENTS } from "@repo/events-names";

authenticate();

mp.events.add("playerReady", (player) => {
  player.call(CLIENT_EVENTS.LOGIN.DISPLAY, [true]);
});

// This is a simple example of how to handle events, it is not a functional login system. You will have to continue from this starting point.

mp.events.add(
  SERVER_EVENTS.LOGIN.RECEIVE_DATA,
  (player, username, password) => {
    console.log(
      `Received login data from ${player.name}: ${username}, ${password}`
    );

    if (username === "test" && password === "test") {
      player.outputChatBox("Login successful");
      player.call(CLIENT_EVENTS.LOGIN.DISPLAY, [false]);
      player.call(CEF_EVENTS.LOGIN.RESPONSE, ["Login successful"]);
    } else {
      player.outputChatBox("Login failed");
      player.call(CEF_EVENTS.LOGIN.RESPONSE, ["Login failed"]);
    }
  }
);
