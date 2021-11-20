import Navbar from "./navbar";
import Footer from "./footer";
import { FC, Fragment } from "react";

const Layout: FC = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
