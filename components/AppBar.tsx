import {
  AppBar as BaseAppBar,
  IconButton,
  Toolbar,
  AppBarProps,
  Box,
  Typography,
  Tooltip,
  Link,
  ButtonGroup,
  Button
} from "@mui/material";
import { FunctionComponent } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useHideMenu } from "mui-extended";
import { NextConfig } from "next";
import getConfig from "next/config";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ExternalLink, InternalLink } from "./Links";
import { links } from "../dataFetch/common";
import { NpmIcon } from "./NpmIcon";

const nextConfig: NextConfig = getConfig();

export const AppBar: FunctionComponent<AppBarProps> = ({ ...props }) => {
  const hideMenu = useHideMenu();
  const MenuIcn = hideMenu.hide ? MenuIcon : MenuOpenIcon;
  return (
    <BaseAppBar {...props} color="default">
      <Toolbar>
        <IconButton
          onClick={() => hideMenu.toggle()}
          size="large"
          color="inherit"
          aria-label="menu"
          edge="start"
        >
          <MenuIcn />
        </IconButton>
        <Box flexGrow={1}>
          <InternalLink href="/">
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              {nextConfig.publicRuntimeConfig?.demo?.title || ""}
            </Typography>
          </InternalLink>
        </Box>

        <Tooltip title="Source" arrow>
          <Link
            color="inherit"
            href={nextConfig.publicRuntimeConfig?.demo?.repoUrl}
            target="_blank"
            mr={2}
          >
            <ButtonGroup size="small">
              <Button color="inherit" startIcon={<GitHubIcon />}>
                Star
              </Button>
            </ButtonGroup>
          </Link>
        </Tooltip>

        <Tooltip title={links.npmSomod.label}>
          <ExternalLink href={links.npmSomod.link} target="_blank" mr={1}>
            <IconButton size="medium" color="secondary">
              <NpmIcon />
            </IconButton>
          </ExternalLink>
        </Tooltip>

        <Tooltip title={links.sodaruHome.label}>
          <ExternalLink href={links.sodaruHome.link} target="_blank">
            <IconButton size="medium" color="primary">
              S
            </IconButton>
          </ExternalLink>
        </Tooltip>
      </Toolbar>
    </BaseAppBar>
  );
};
