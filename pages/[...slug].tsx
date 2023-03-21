import { FunctionComponent } from "react";
import { Box, Container } from "@mui/material";
import { CodeComponentContextProvider, MarkdownPreview } from "mui-extended";
import { DocFooter } from "../components/DocFooter";
import { FilePaths, getDoc } from "../dataFetch/data";
import { BreadCrumb } from "../components/BreadCrumb";

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
      doc: await getDoc(params.slug)
    }
  };
}

const Doc: FunctionComponent<{ title: string; content: string }> = ({
  title,
  content
}) => {
  return (
    <Box p={1}>
      <Container maxWidth="lg" disableGutters>
        <Box minHeight="90vh">
          <BreadCrumb />
          <MarkdownPreview>{title}</MarkdownPreview>
          <hr />
          <CodeComponentContextProvider
            value={{ enableCopy: true, maxHeight: "50vh" }}
          >
            <MarkdownPreview>{content}</MarkdownPreview>
          </CodeComponentContextProvider>
        </Box>
        <DocFooter />
      </Container>
    </Box>
  );
};

export default Doc;
