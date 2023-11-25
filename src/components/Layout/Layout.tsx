import { Children, ReactNode } from "react";
import "./Layout.css";
import { Helmet } from "react-helmet";
import SideNavigation from "../SideNavigation/SideNavigation";
export type LayoutProps = {
  children: ReactNode;
};
const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  return (
    <>
      <div className="container">
        <div className="left-navigation">
          <SideNavigation />
        </div>
        <div className="body-content">{props?.children}</div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>SpaceX Live Info</title>
        </Helmet>
      </div>
    </>
  );
};

export default Layout;
