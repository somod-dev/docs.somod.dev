import { Link as MuiLink, LinkProps, useTheme } from "@mui/material";
import { forwardRef } from "react";
import Link from "next/link";

export const InternalLink = forwardRef<HTMLAnchorElement, LinkProps>(
  function InternalLink({ children, href, ...props }, ref) {
    const theme = useTheme();
    return (
      <Link href={href} passHref>
        <MuiLink
          {...props}
          ref={ref}
          sx={{ textDecoration: "none" }}
          color={theme.palette.mode == "dark" ? "secondary" : undefined}
        >
          {children}
        </MuiLink>
      </Link>
    );
  }
);

export const ExternalLink = forwardRef<HTMLAnchorElement, LinkProps>(
  function ExternalLink({ children, ...props }, ref) {
    const theme = useTheme();
    return (
      <MuiLink
        {...props}
        ref={ref}
        sx={{ textDecoration: "none" }}
        color={theme.palette.mode == "dark" ? "secondary" : undefined}
      >
        {children}
      </MuiLink>
    );
  }
);
