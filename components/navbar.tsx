import { Params } from 'next/dist/server/router';
import Image from 'next/image';
import Link from 'next/link';

const NavbarItem = ({ label }: Params) => {
  return (
    <div className="ml-14 hover:text-blue text-gray-500">
      <Link href="/">
        <a rel="noopener noreferrer">
          <div>{label}</div>
        </a>
      </Link>
    </div>
  );
};

const Navbar = ({ ...pageProps }: Params) => {
  return (
    <div className="relative bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6">
          <div className="flex justify-start lg:flex-1">
            <div className="flex">
              <NavbarItem label={'من نحن'}></NavbarItem>
              <NavbarItem label={'المدونة'}></NavbarItem>
              <NavbarItem label={'تواصل معنا'}></NavbarItem>
            </div>
          </div>
          <div className="flex justify-end lg:flex-1">
            <Link href="/">
              <Image src="/logo.svg" alt="WTMSaudi Logo" width={200} height={50} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
