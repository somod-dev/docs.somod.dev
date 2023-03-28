import { Box } from "@mui/material";
import {
  LinkComponentType,
  TreeMenuWithNextLinks,
  TreeMenuWithNextLinksProps,
  useStateWithSessionStorage
} from "mui-extended";
import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";

const NextLinks = ({ href, children }: LinkComponentType) => {
  return (
    <Link href={"/" + href} passHref={true} legacyBehavior>
      <a style={{ width: "100%" }}>{children}</a>
    </Link>
  );
};

/***
 * if path is A/B/C node ids should be [A,A/B,A/B/C]
 */
const getNodeIds = (path: string): string[] => {
  let prev = null;

  const nodeIds = path.split("/").map(nodeid => {
    prev = prev ? prev + "/" + nodeid : nodeid;
    return prev;
  });
  return nodeIds;
};

export const TreeMenuWithNextLinksSessionPersisted: FunctionComponent<
  TreeMenuWithNextLinksProps
> = props => {
  const router = useRouter();

  const [expanded, setExpanded] = useStateWithSessionStorage<string[]>(
    "layoutMenuExpanded",
    getNodeIds(router.asPath.substring(1))
  );
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
