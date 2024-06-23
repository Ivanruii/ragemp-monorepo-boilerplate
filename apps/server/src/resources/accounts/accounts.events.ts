import { LoginData, LoginSystem, Player } from "./accounts.bussines";

const loginSystem = new LoginSystem();

mp.events.add({
  "server::player::register": async (player: Player, obj: string) => {
    const data = JSON.parse(obj) as LoginData;
    await loginSystem.playerRegister(player, data);
  },
  "server::player::login": async (player: Player, obj: string) => {
    const data = JSON.parse(obj) as LoginData;
    await loginSystem.playerLogin(player, data);
  },
});
