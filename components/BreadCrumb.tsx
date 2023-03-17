import { Breadcrumbs, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { InternalLink } from "./Links";

const improveLabel = (label: string, improve?: boolean) => {
  if (improve) {
    label = label
      .split(/(-|_)/)
      .filter(c => c != "-" && c != "_")
      .map(s => s.charAt(0).toLocaleUpperCase() + s.substring(1))
      .join(" ");
  }
  return label;
};

const sanitiizeCurrentPageLabel = (currentPage: string) => {
  if (currentPage.indexOf("?") != -1) {
    currentPage = currentPage.substring(0, currentPage.indexOf("?"));
  }

  if (currentPage.indexOf("#") != -1) {
    currentPage = currentPage.substring(0, currentPage.indexOf("#"));
  }
  return currentPage;
};

export const BreadCrumb: FunctionComponent = () => {
  const router = useRouter();
  const pathSegments = router.asPath.split("/").filter(s => !!s);
  const currentPage = pathSegments.pop();
  return (
    <Breadcrumbs>
      <InternalLink color="inherit" href="/">
        Home
      </InternalLink>
      {pathSegments.map((pathSegment, i) => (
        <InternalLink
          key={i}
          color="inherit"
          href={"/" + pathSegments.slice(0, i + 1).join("/")}
        >
          {improveLabel(pathSegment, true)}
        </InternalLink>
      ))}
      <Typography>
        {improveLabel(sanitiizeCurrentPageLabel(currentPage), true)}
      </Typography>
    </Breadcrumbs>
  );
};
