import { execSync } from "child_process";
process.chdir("/Users/eduardodias/lpsousaediasadvogados");
execSync("npx next dev --port 3001", { stdio: "inherit" });
