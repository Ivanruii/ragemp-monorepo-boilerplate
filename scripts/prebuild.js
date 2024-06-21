import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const serverBuildPath = path.resolve(__dirname, "../server-build");
const serverFilesPath = path.resolve(__dirname, "../server-files");
const directoriesToCreate = [
  path.resolve(serverBuildPath, "client_packages", "cef"),
  path.resolve(serverBuildPath, "packages", "server"),
];

const packageJsonContent = {
  name: "server-build",
  version: "1.0.0",
  description: "",
  main: "index.js",
  scripts: {
    test: 'echo "Error: no test specified" && exit 1',
  },
  keywords: [],
  author: "",
  license: "ISC",
};

async function createPackageJson() {
  const packageJsonPath = path.join(serverBuildPath, "package.json");
  const packageJsonString = JSON.stringify(packageJsonContent, null, 2);

  await fs.promises.writeFile(packageJsonPath, packageJsonString, "utf8");
}

async function copyDirectory(source, destination) {
  await fs.promises.mkdir(destination, { recursive: true });
  const entries = await fs.promises.readdir(source, { withFileTypes: true });

  await Promise.all(
    entries.map(async (entry) => {
      const srcPath = path.join(source, entry.name);
      const destPath = path.join(destination, entry.name);

      if (entry.isDirectory()) {
        await copyDirectory(srcPath, destPath);
      } else {
        await fs.promises.copyFile(srcPath, destPath);
      }
    })
  );
}

async function setupBuild() {
  try {
    if (fs.existsSync(serverBuildPath)) {
      await fs.promises.rm(serverBuildPath, { recursive: true, force: true });
    }

    await Promise.all(
      directoriesToCreate.map((dir) =>
        fs.promises.mkdir(dir, { recursive: true })
      )
    );

    await copyDirectory(serverFilesPath, serverBuildPath);

    // Create package.json in server-build directory
    await createPackageJson();

    console.log("Build setup completed successfully.");
  } catch (err) {
    console.error("Error during build setup:", err);
    process.exit(1);
  }
}

setupBuild();
