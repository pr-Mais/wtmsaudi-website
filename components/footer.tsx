import { Params } from 'next/dist/server/router';
import Image from 'next/image';
import Link from 'next/link';

const Footer = ({ ...pageProps }: Params) => {
  return (
    <div className="bg-blue footer h-52">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 ">
        <div className="flex justify-between items-top py-7">
          <div className="text-white">{pageProps.lngDict.name.title}</div>
          <div className="flex justify-end m-l-0">
            <Link href="/">
              <Image src="/logo-white.svg" alt="WTMSaudi Logo White" width="300" height="50" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
