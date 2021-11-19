import { Params } from 'next/dist/server/router';

import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ children, ...pageProps }: Params) => {
  return (
    <div className="flex-wrapper">
      <Navbar {...pageProps} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 overflow-hidden h-screen">{children}</div>
      <Footer {...pageProps} />
    </div>
  );
};

export default Layout;
