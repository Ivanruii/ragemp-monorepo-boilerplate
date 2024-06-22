import fs from "fs";
import path from "path";
import { exec } from "child_process";
import { promisify } from "util";
import { fileURLToPath } from "url";

const execAsync = promisify(exec);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dependenciesJsonPath = path.resolve(__dirname, "../dependencies.json");
const serverBuildPath = path.resolve(__dirname, "../server-build");

async function installDependencies() {
  try {
    const dependenciesContent = await fs.promises.readFile(
      dependenciesJsonPath,
      "utf8"
    );
    const dependencies = JSON.parse(dependenciesContent);

    const packageJsonPath = path.join(serverBuildPath, "package.json");
    const packageJson = JSON.parse(
      await fs.promises.readFile(packageJsonPath, "utf8")
    );
    packageJson.dependencies = dependencies;

    await fs.promises.writeFile(
      packageJsonPath,
      JSON.stringify(packageJson, null, 2),
      "utf8"
    );

    console.log("Installing dependencies...");
    const { stdout, stderr } = await execAsync(`npm install`, {
      cwd: serverBuildPath,
    });

    if (stderr) {
      console.error("Error during npm install:", stderr);
    } else {
      console.log("Dependencies installed successfully:", stdout);
    }
  } catch (error) {
    console.error("Error during postbuild:", error);
    process.exit(1);
  }
}

installDependencies();
