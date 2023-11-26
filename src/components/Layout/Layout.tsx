import { ReactNode } from "react";
import "./Layout.css";
import { Helmet } from "react-helmet";
import SiteNavigation from "../SiteNavigation/SiteNavigation";
export type LayoutProps = {
  children: ReactNode;
};
const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  return (
    <>
      <div className="container">
        <div className="site-navigation">
          <SiteNavigation />
        </div>
        <div className="body-content">
          <img
            className="background-image"
            alt=""
            src="https://live.staticflickr.com/7706/26751237322_5a52540ea3_h.jpg"
          />
          <div className="main-content">{props?.children}</div>
        </div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>SpaceX Live Info</title>
        </Helmet>
      </div>
    </>
  );
};

export default Layout;
