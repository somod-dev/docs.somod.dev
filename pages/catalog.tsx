import { Box, Typography, Link } from "@mui/material";
import { FunctionComponent } from "react";
import { Meta } from "../components/Meta";
import { FilePaths } from "../dataFetch/data";

export async function getStaticProps() {
  return {
    props: {
      pages: await FilePaths.getFilePaths(),
      doc: null
    }
  };
}

const CatalogBanner: FunctionComponent = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="70vh"
    >
      <Typography
        variant="h2"
        variantMapping={{ h2: "h1" }}
        textAlign="center"
        color="primary"
      >
        SOMOD Module Catalog
      </Typography>
      <Typography
        variant="h5"
        variantMapping={{ h5: "h3" }}
        textAlign="center"
        py={2}
      >
        Browse the SOMOD Modules developed from Sodaru and other third party
        developers
      </Typography>

      <Typography
        variant="h4"
        variantMapping={{ h4: "h2" }}
        textAlign="center"
        py={3}
      >
        Modules are being built. Stay tuned and follow{" "}
        <Link href="https://dev.to/t/somod" target="_blank">
          SOMOD Blog
        </Link>{" "}
        for updates
      </Typography>
    </Box>
  );
};

const Catalog: FunctionComponent = () => {
  const title = "Catalog of SOMOD Modules";
  const description =
    "Browse the SOMOD Modules developed from Sodaru and other third party developers";
  return (
    <>
      <Meta meta={{ title, meta: { description } }} />
      <Box minHeight="90vh" py={4}>
        <CatalogBanner />
      </Box>
    </>
  );
};

export default Catalog;
