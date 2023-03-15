/* eslint-disable no-console */
// import { createReadStream } from "node:fs";
// import { createInterface } from "node:readline";
import { readFile } from "node:fs/promises";
import { getMenuPaths } from "../demoUtils/menuPath";

// export const MenuPahts: string[] = [];

// async function processLineByLine() {
//   const fileStream = createReadStream("./node_modules/somod-docs/src/_files");
//   const paths = [];

//   const rl = createInterface({
//     input: fileStream
//   });
//   for await (const abc of rl) {
//     console.log(`Line from file: ${abc}`);
//     paths.push(abc);
//   }

//   return paths;
// }

export async function getStaticPaths() {
  const filePaths = await getMenuPaths();

  const paths = filePaths.map(path => {
    return { params: { slug: path.split("/") } };
  });

  console.log("after line - " + paths);

  return {
    paths: paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      pages: await getMenuPaths(),
      doc: {
        content: await readFile(
          `./node_modules/somod-docs/src/${params.slug.join("/")}.md`,
          { encoding: "utf8" }
        )
      }
    }
  };
}

export { default } from "../demoUtils/emptyDemoComponent";