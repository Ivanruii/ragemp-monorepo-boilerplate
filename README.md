# RAGE Multiplayer Monorepo Boilerplate

Welcome to the RAGE Multiplayer (RAGE MP) Monorepo Boilerplate! This repository provides a starting point for setting up a RAGE MP server with a monorepo structure, making it easier to manage and scale your game server project.

> [!IMPORTANT]  
> This is not a complete gamemode, just a starting point for those developers who want to start a ragemp server in a simple way.

## 🛠️ Features

- **Monorepo Structure:** Organize your server, client, and cef code in a single repository.
- **TypeScript Support:** Write your scripts in TypeScript for better code quality and maintainability.
- **React Support:** Using react to create the cef.
- **Modular Architecture:** Easily add and manage new features or packages.
- **Built-in Scripting:** Preconfigured scripts to set the ragemp structure automatically.
- **Events names package:** A monorepo package with enums to prevent mistakes when naming events.

## 🚀 Getting Started

### 🚨 Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v20.9.0 or upper recommended, may not work with previous versions)
- [pnpm](https://pnpm.io/es/)

### ⚙️ Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/ragemp-monorepo-boilerplate.git
   cd ragemp-monorepo-boilerplate
   ```

   (You can also use this repo as a template in github)

2. **Install dependencies:**

   ```sh
   pnpm i
   ```

3. **Add your database connection:**

   - Go to `apps > server` and create a **.env** file with the following data:

     ```env
     VITE_DB_HOST= // Database IP
     VITE_DB_NAME= // Database name
     VITE_DB_USERNAME= // Database username
     VITE_DB_PASSWORD= // Database password
     VITE_DB_DIALECT= // Database dialect (Availabe databases with sequelize: Postgres, MySQL, MariaDB, SQLite, Microsoft SQL Server, Oracle)
     ```

> [!WARNING]
> I have installed Postgres. If you want to use a different database system, you must uninstall mine and install yours. More information in sequelize getting started docs: https://sequelize.org/docs/v6/getting-started/

4. **Add your ragemp server files:**

   - Add your ragemp server files to the **server-files** directory, you should delete the **client-packages** and **packages** folders.

5. **Run build command:**

   ```sh
   pnpm run build
   ```

   The contents of your dists folders will be automatically moved to their corresponding directory after the build.

   - Server build will go to **_server-build>packages>server_**
   - Client will go to **_server-build>packages_client_**
   - Cef build will go to **_server-build>client_packages>cef_**

6. **Start your RageMP server:**

   ```sh
   pnpm run start:server
   ```

## ⚙️ Future Additions

- [x] ~Add a better architecture for the server, client and cef.~
- [x] ~Add connection to a database.~
- [ ] Dockerize the monorepository.
- [ ] SASS support.
- [ ] Add testing (probably vitest).
- [x] ~Add a system to test the operation of the boilerplate, to serve as an example for anyone to follow from there (Login and registration system).~
- [x] ~Add an event management system between CEF, client and server.~

## **README.md is still WIP ⚒️**

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
