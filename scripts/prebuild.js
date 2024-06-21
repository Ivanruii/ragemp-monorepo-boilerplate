import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const serverBuildPath = path.resolve(__dirname, "../server-build");
const serverFilesPath = path.resolve(__dirname, "../server-files");
const directoriesToCreate = [
  path.resolve(serverBuildPath, "client_packages", "cef"),
  path.resolve(serverBuildPath, "packages"),
];

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

    console.log("Build setup completed successfully.");
  } catch (err) {
    console.error("Error during build setup:", err);
    process.exit(1);
  }
}

setupBuild();
