import { accountInterface } from "./accounts.interface";
import bcrypt from "bcrypt";
const saltRounds = 10;

export interface Player {
  outputChatBox(message: string): void;
  call(eventName: string, args?: unknown[]): void;
  loggedIn?: boolean;
  account?: unknown;
  ip: string;
  characters?: unknown[];
  numofcharacters?: number;
}

export interface LoginData {
  username: string;
  password: string;
  email?: string;
}

export class LoginSystem {
  private Account = accountInterface.accounts;

  async playerLogin(player: Player, data: LoginData): Promise<void> {
    if (!data.username || !data.password) {
      player.outputChatBox(
        "!{#cc2121}[Sistema]!{#white} Tienes que proporcionar un nombre de usuario y una contraseña."
      );
      return;
    }

    try {
      const account = await this.Account.findOne({
        where: { username: data.username },
      });
      if (account) {
        const result = await bcrypt.compare(data.password, account.password);
        if (result) {
          player.loggedIn = true;
          player.account = account;
          player.call("cef::accounts::closelogin");
          player.outputChatBox("!{#21cc21}[Sistema]!{#white} Login exitoso.");
        } else {
          player.outputChatBox(
            "!{#cc2121}[Sistema]!{#white} Nombre de usuario o contraseña incorrectos."
          );
        }
      } else {
        player.outputChatBox(
          "!{#cc2121}[Sistema]!{#white} Nombre de usuario o contraseña incorrectos."
        );
      }
    } catch (err) {
      console.error(err);
      player.outputChatBox(
        "!{#cc2121}[Sistema]!{#white} Error en el sistema de login."
      );
    }
  }

  async playerRegister(player: Player, data: LoginData): Promise<void> {
    if (!data.username || !data.password || !data.email) {
      player.outputChatBox(
        "!{#cc2121}[Sistema]!{#white} Tienes que proporcionar un nombre de usuario, correo electrónico y una contraseña."
      );
      return;
    }

    try {
      const existingAccount = await this.Account.findOne({
        where: { username: data.username },
      });
      if (existingAccount) {
        player.outputChatBox(
          "!{#cc2121}[Sistema]!{#white} Ya hay una cuenta con ese nombre de usuario."
        );
        return;
      }

      const existingAccountWithIP = await this.Account.findOne({
        where: { ip: player.ip },
      });
      if (existingAccountWithIP) {
        player.outputChatBox(
          "!{#cc2121}[Sistema]!{#white} Ya hay una cuenta registrada con esta dirección IP."
        );
        return;
      }

      const hash = await bcrypt.hash(data.password, saltRounds);
      const newAccount = await this.Account.create({
        username: data.username,
        email: data.email,
        password: hash,
        ip: player.ip,
      });

      player.outputChatBox(
        `!{#21cc21}[Sistema]!{#white} ¡Nueva cuenta creada con éxito! Usuario ${newAccount.username}`
      );
    } catch (err) {
      console.error(err);
      player.outputChatBox(
        "!{#cc2121}[Sistema]!{#white} Error en el sistema de registro."
      );
    }
  }
}
