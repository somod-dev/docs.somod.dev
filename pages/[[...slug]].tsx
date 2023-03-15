import { readFile } from "node:fs/promises";
import { FilePaths } from "../demoUtils/menuPath";
import { extractDetailsFromDocContent } from "../demoUtils/staticProps";

export async function getStaticPaths() {
  const filePaths = await FilePaths.getFilePaths();

  const paths = filePaths.map(path => {
    return { params: { slug: path.split("/") } };
  });

  return {
    paths: paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      pages: await FilePaths.getFilePaths(),
      doc: extractDetailsFromDocContent(
        await readFile(
          `./node_modules/somod-docs/src/${params.slug.join("/")}.md`,
          { encoding: "utf8" }
        )
      )
    }
  };
}

export { default } from "../demoUtils/emptyDemoComponent";
