mp.events.add("playerReady", (player) => {
  player.loggedIn = false;
  player.spawn(new mp.Vector3(-790.034, -578.215, 30.12));
  player.dimension = 1001;
  player.call("cef::accounts::openlogin");
});
