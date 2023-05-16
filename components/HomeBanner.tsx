import { Box, Button, Container, Typography } from "@mui/material";
import { MarkdownPreview } from "mui-extended";
import { InternalLink } from "./Links";
import { SomodTitle } from "@solib/media-kit";

export const HomeBanner = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      py={4}
    >
      <Box p={2}>
        <SomodTitle width="16rem" />
      </Box>
      <Typography variant="h4" textAlign="center">
        <strong>S</strong>erverless <strong>O</strong>ptimized{" "}
        <strong>MOD</strong>ules
      </Typography>
      <Typography variant="h6" textAlign="center" color="primary">
        One Framework to Develop, Build and Deploy Serverless Applications
      </Typography>

      <Container maxWidth="xs">
        <MarkdownPreview>{`
      npx create-somod
      cd my-module
      npm start
      `}</MarkdownPreview>
      </Container>
      <Box display="flex" justifyContent="center">
        <InternalLink href="/overview">
          <Button
            variant="contained"
            size="large"
            color="secondary"
            sx={{ m: 1 }}
          >
            Getting Started
          </Button>
        </InternalLink>
      </Box>
      <Box display="flex" justifyContent="center">
        <InternalLink href="/reference">
          <Button size="large" sx={{ m: 1 }} color="info">
            Reference
          </Button>
        </InternalLink>
      </Box>
    </Box>
  );
};
