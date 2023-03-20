import {
  Container,
  Grid,
  Paper,
  Typography,
  useTheme,
  Stack,
  Tooltip
} from "@mui/material";
import { SomodTitle, SodaruTitle } from "@solib/media-kit";
import { ThemeModeSwitch, CookiePreference } from "mui-extended";
import Link from "next/link";
import { links } from "../dataFetch/common";
import { ExternalLink, InternalLink } from "./Links";

export const Footer = () => {
  const theme = useTheme();
  return (
    <Paper
      elevation={6}
      sx={{
        minHeight: "30vh",
        m: -1,
        mt: 2,
        backgroundColor:
          theme.palette.mode == "light" ? theme.palette.grey[200] : undefined
      }}
      square
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Stack>
              <Typography variant="subtitle2" pb={1}>
                This documentation is built using
              </Typography>
              <InternalLink href={links.home.link}>
                <SomodTitle />
              </InternalLink>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack>
              <Typography variant="subtitle2" pb={1}>
                Legal
              </Typography>
              <Link href={links.contactUs.link} passHref>
                <ExternalLink>{links.contactUs.label}</ExternalLink>
              </Link>
              <Link href={links.termsOfUse.link} passHref>
                <ExternalLink>{links.termsOfUse.label}</ExternalLink>
              </Link>
              <Link href={links.privacyPolicy.link} passHref>
                <ExternalLink>{links.privacyPolicy.label}</ExternalLink>
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle2" pb={1}>
              Developed and Maintained By
            </Typography>
            <SodaruTitle width="8rem" />
            <Typography variant="subtitle2">Sodaru Technologies</Typography>
            <ExternalLink href="https://sodaru.com" target="_blank">
              https://sodaru.com
            </ExternalLink>
            <ThemeModeSwitch sx={{ my: 3 }} />
            <Typography variant="subtitle1">
              &copy; {new Date().getFullYear()}
            </Typography>
          </Grid>
        </Grid>
        <Tooltip title="Cookie Preferences">
          <CookiePreference sx={{ position: "fixed", bottom: 25, right: 25 }} />
        </Tooltip>
      </Container>
    </Paper>
  );
};
