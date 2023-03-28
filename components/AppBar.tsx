import {
  AppBar as BaseAppBar,
  IconButton,
  Toolbar,
  AppBarProps,
  Box,
  Tooltip,
  ButtonGroup,
  Button
} from "@mui/material";
import { FunctionComponent } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useHideMenu } from "mui-extended";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ExternalLink, InternalLink } from "./Links";
import { links } from "../dataFetch/common";
import { NpmIcon } from "./NpmIcon";
import { SodaruLogo, SomodTitle } from "@solib/media-kit";
import BookIcon from "@mui/icons-material/Book";

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
        >
          <MenuIcn />
        </IconButton>

        <InternalLink href="/" display="flex">
          <SomodTitle width="8rem" />
        </InternalLink>
        <Box flexGrow={1}>&nbsp;</Box>

        <ExternalLink
          color="inherit"
          href={links.blogSomod.link}
          target="_blank"
          mr={2}
        >
          <ButtonGroup size="small">
            <Button color="inherit" startIcon={<BookIcon />}>
              Blog
            </Button>
          </ButtonGroup>
        </ExternalLink>

        <Tooltip title={links.githubSomod.label}>
          <ExternalLink href={links.githubSomod.link} target="_blank" mr={1}>
            <IconButton size="medium" color="primary">
              <GitHubIcon />
            </IconButton>
          </ExternalLink>
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
              <SodaruLogo width={19.2} height={19.2} />
            </IconButton>
          </ExternalLink>
        </Tooltip>
      </Toolbar>
    </BaseAppBar>
  );
};
