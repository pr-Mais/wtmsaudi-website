import { Params } from 'next/dist/server/router';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Footer = ({ ...pageProps }: Params) => {
  return (
    <div className="bg-white footer h-52">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className="flex justify-between items-center border-t-2 border-gray-100 py-6  md:space-x-10">
          <div>{pageProps.lngDict.name.title}</div>
          <div className="flex justify-end lg:w-0 lg:flex-1">
            <a href="/" rel="noopener noreferrer">
              <Image src="/logo.svg" alt="WTMSaudi Logo" width={200} height={50} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
