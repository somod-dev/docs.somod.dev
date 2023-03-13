/* eslint-disable no-console */
export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: ["1", "2"] } }, { params: { slug: ["3", "4"] } }],
    fallback: false
  };
}

export async function getStaticProps(context) {
  console.log("context is - ");
  const { params } = context;
  console.log(params);
  return { props: params };
}

export default function Page(props) {
  console.log("props is - ");
  console.log(props);
  return <div>dfdfs</div>;
}
