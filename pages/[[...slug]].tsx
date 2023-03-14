/* eslint-disable no-console */
import { createReadStream } from "node:fs";
import { createInterface } from "node:readline";

async function processLineByLine() {
  const fileStream = createReadStream("./node_modules/somod-docs/src/_files");
  const paths = [{ params: { slug: ["1", "2"] } }];

  const rl = createInterface({
    input: fileStream
  });
  for await (const line of rl) {
    console.log(`Line from file: ${line}`);
    paths.push({ params: { slug: line.split("/") } });
  }

  return paths;
}

export async function getStaticPaths() {
  const paths = await processLineByLine();

  console.log("after line - " + paths);

  return {
    paths: paths,
    fallback: false
  };
}

export async function getStaticProps(context) {
  console.log("context is - ");
  const { params } = context;
  console.log(params);
  return { props: params };
}

// export default function Page(props) {
//   console.log("props is - ");
//   console.log(props);
//   return <div>dfdfs</div>;
// }

export { default } from "../demoUtils/emptyDemoComponent";

// export const getStaticProps = getStaticPropsFactory("google-analytics");
