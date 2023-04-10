import { CssBaseline } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { GoogleAnalytics, ThemeOptionsProvider } from "mui-extended";
import { NextConfig } from "next";
import { AppProps } from "next/app";
import getConfig from "next/config";
import Head from "next/head";
import { Layout } from "../components/Layout";
import { Meta } from "../components/Meta";
import { StaticProps } from "../dataFetch/data";

const MuiExtendedDemoApp = ({
  /**
   * Compoenent is not used purposefully here
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Component,
  pageProps
}: AppProps<StaticProps>) => {
  const nextConfig: NextConfig = getConfig();

  const defaultThemeOptions =
    nextConfig?.publicRuntimeConfig?.defaultThemeOptions || {};

  const pages = pageProps.pages || [];
  const meta = pageProps.doc?.meta;
  const content = pageProps.doc?.content || "";
  const title = pageProps.doc?.title || "";

  return (
    <>
      <GoogleAnalytics />
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_CODE} />
      </Head>
      <Meta meta={meta} />
      <CssBaseline enableColorScheme />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeOptionsProvider themeOptions={defaultThemeOptions}>
          <Layout pages={pages}>
            <Component title={title} content={content} />
          </Layout>
        </ThemeOptionsProvider>
      </LocalizationProvider>
    </>
  );
};

export default MuiExtendedDemoApp;
