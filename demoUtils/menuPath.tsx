import { createReadStream } from "node:fs";
import { createInterface } from "node:readline";

export async function getMenuPaths() {
  const fileStream = createReadStream("./node_modules/somod-docs/src/_files");
  const paths = [];

  const rl = createInterface({
    input: fileStream
  });
  for await (const abc of rl) {
    paths.push(abc);
  }

  return paths;
}
