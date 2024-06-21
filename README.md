# RAGE Multiplayer Monorepo Boilerplate (0.1.0)

Welcome to the RAGE Multiplayer (RAGE MP) Monorepo Boilerplate! This repository provides a starting point for setting up a RAGE MP server with a monorepo structure, making it easier to manage and scale your game server project.

## 🛠️ Features

- **Monorepo Structure:** Organize your server, client, and cef code in a single repository.
- **TypeScript Support:** Write your scripts in TypeScript for better code quality and maintainability.
- **React Support:** Using react to create the cef.
- **Modular Architecture:** Easily add and manage new features or packages.
- **Built-in Scripting:** Preconfigured scripts to set the ragemp structure automatically.

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

2. **Install dependencies:**

   ```sh
   pnpm i
   ```

3. **Add your ragemp server files:**

   - Create a directory called **server-files** and add your ragemp server files, you should delete the **client-packages** and **packages** folders.

4. **Start your RageMP server:**

   ```sh
   pnpm run start:server
   ```

### ⚙️ Future Additions

- Add a better architecture for the server, client and cef.
- Add connection to a database.
- Dockerize the monorepository.
- SASS support.

## **README.md is still WIP ⚒️**

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
