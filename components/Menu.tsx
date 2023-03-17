import { Box } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import {
  LinkComponentType,
  TreeMenuWithNextLinks,
  TreeMenuWithNextLinksProps,
  useStateWithSessionStorage
} from "mui-extended";

const NextLinks = ({ href, children }: LinkComponentType) => {
  return (
    <Link href={"/" + href} passHref={true} legacyBehavior>
      <a style={{ width: "100%" }}>{children}</a>
    </Link>
  );
};

export const TreeMenuWithNextLinksSessionPersisted: FunctionComponent<
  TreeMenuWithNextLinksProps
> = props => {
  const [expanded, setExpanded] = useStateWithSessionStorage<string[]>(
    "layoutMenuExpanded",
    []
  );
  const router = useRouter();
  const onNodeToggle = (event: React.SyntheticEvent, nodeIds: string[]) => {
    setExpanded(nodeIds);
  };

  return (
    <TreeMenuWithNextLinks
      {...props}
      TreeViewProps={{
        expanded,
        onNodeToggle,
        selected: router.asPath.substring(1)
      }}
      LinkComponent={NextLinks}
    />
  );
};

export const convertDemoPagesToTreeMenuProps = (
  pages: string[]
): TreeMenuWithNextLinksProps => {
  const props: TreeMenuWithNextLinksProps = {
    links: pages.map(page => {
      let link: TreeMenuWithNextLinksProps["links"][number] = page;
      if (link == "index") {
        link = { link: "/", label: "home" };
      } else if (link.endsWith("/index")) {
        link = link.substring(0, link.lastIndexOf("/index"));
      }
      return link;
    }),
    improveLabels: true
  };

  return props;
};

export const Menu = ({ pages }: { pages?: string[] }) => {
  return (
    <span>
      <Box p={1}></Box>
      <TreeMenuWithNextLinksSessionPersisted
        {...convertDemoPagesToTreeMenuProps(pages)}
      />
    </span>
  );
};
