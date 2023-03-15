import { createReadStream } from "node:fs";
import { createInterface } from "node:readline";
/**
 * TODO: improvise below class - _files has to be loaded only once and should be cached
 */
export class FilePaths {
  private static filePaths: string[] = null;

  static async getFilePaths() {
    if (FilePaths.filePaths) {
      return FilePaths.filePaths;
    }

    FilePaths.filePaths = [];
    const fileStream = createReadStream("./node_modules/somod-docs/src/_files");

    const rl = createInterface({
      input: fileStream
    });
    for await (const abc of rl) {
      FilePaths.filePaths.push(abc);
    }

    return FilePaths.filePaths;
  }
}
