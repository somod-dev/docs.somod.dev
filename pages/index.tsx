import { FilePaths } from "../dataFetch/data";
import { FunctionComponent } from "react";
import { Box, Container } from "@mui/material";
import { Meta } from "../components/Meta";
import { HomeBanner } from "../components/HomeBanner";

export async function getStaticProps() {
  return {
    props: {
      pages: await FilePaths.getFilePaths(),
      doc: null
    }
  };
}

const Index: FunctionComponent = () => {
  const title = "SOMOD Documentation | Serverless Optimized MODules";
  const description =
    "Combine Infrastructure, Backend and Frontend into reusable modules using SOMOD framework";

  return (
    <Container maxWidth="lg">
      <Meta meta={{ title, meta: { description } }} />
      <Box minHeight="90vh" py={4}>
        <HomeBanner />
      </Box>
    </Container>
  );
};

export default Index;
