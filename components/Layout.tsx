import { PropsWithChildren } from "react";
import { HideMenuProvider, Layout as BaseLayout } from "mui-extended";
import { AppBar } from "./AppBar";
import { Menu } from "./Menu";
import { Footer } from "./Footer";

type DemoLayoutProps = PropsWithChildren<{
  pages: string[];
}>;

export const Layout = (props: DemoLayoutProps) => {
  return (
    <HideMenuProvider>
      <BaseLayout
        menu={<Menu pages={props.pages} />}
        appBar={<AppBar />}
        splitPaneProps={{ minSize: 250 }}
      >
        {props.children}
        <Footer />
      </BaseLayout>
    </HideMenuProvider>
  );
};
