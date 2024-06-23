import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../core/database/connection.database";

interface AccountAttributes {
  id?: number;
  username: string;
  email: string;
  password: string;
  ip?: string;
}

class Account extends Model<AccountAttributes> implements AccountAttributes {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public ip?: string;
}

Account.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ip: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "accounts",
  }
);

Account.sync({ force: false });

export const accountInterface = { accounts: Account };
