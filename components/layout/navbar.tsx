import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

type NavbarItemProps = {
  label: React.ReactNode;
  herf: string;
};

const NavbarItem = ({ label, herf }: NavbarItemProps) => {
  return (
    <div className="sm:rtl:mr-14 sm:ltr:ml-14 sm:p-0 p-2 hover:text-blue text-gray-500">
      <Link href={herf}>
        <a rel="noopener noreferrer">
          <div>{label}</div>
        </a>
      </Link>
    </div>
  );
};

const Navbar = () => {
  const [openDrawer, setDrawer] = useState(false);

  const open = () => setDrawer(true);
  const close = () => setDrawer(false);

  const { t } = useTranslation();

  return (
    <header className="relative bg-white">
      <motion.div
        variants={{
          open: { width: '100vw' },
          close: { width: '0' },
        }}
        initial="close"
        animate={openDrawer ? 'open' : 'close'}
        transition={{ ease: 'easeInOut', duration: 0.2 }}
        className="fixed sm:hidden bg-white inset-y-0 ltr:left-0 rtl:right-0 z-50 overflow-hidden"
      >
        <div className="p-4">
          <div onClick={toggleBodyScroll} className={"p-2"}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={close}>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div>
            <div className="flex justify-center py-3 border-b-2 " onClick={close}>
              <Link href="/" >
                <div style={{ fontSize: 0 }}>
                  <Image src="/logo.svg" alt="WTMSaudi Logo" width={180} height={45} />
                </div>
              </Link>
            </div>
            <div className="flex justify-center my-6">
              <div onClick={close} className="text-center">
                <NavbarItem label={t('layout:navbar.blog')} herf={"/blog"}></NavbarItem>
                <NavbarItem label={t('layout:navbar.about')} herf={"/"}></NavbarItem>
                <NavbarItem label={t('layout:navbar.contact')} herf={"/"}></NavbarItem>
              </div>
            </div>
          </div>
        </div>

      </motion.div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* <div className="flex justify-between items-center border-b-2 border-gray-100 py-2"> */}
        <div className="flex justify-between items-center py-2">
          <div className="sm:hidden p-2" onClick={toggleBodyScroll} >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-auto" viewBox="0 0 20 20" fill="green" onClick={open}>
              <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>
          </div>
          <div className=" sm:mr-0 sm:ml-0 ml-3 mr-auto">
            <Link href="/">
              <div style={{ fontSize: 0 }}>
                <Image src="/logo.svg" alt="WTMSaudi Logo" width={180} height={45} />
              </div>
            </Link>
          </div>
          <div className="sm:flex hidden justify-start">
            <div className="flex">
              <NavbarItem label={t('layout:navbar.blog')} herf={"/blog"}></NavbarItem>
              <NavbarItem label={t('layout:navbar.about')} herf={"/"}></NavbarItem>
              <NavbarItem label={t('layout:navbar.contact')} herf={"/"}></NavbarItem>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

const toggleBodyScroll = () => {
  const body = document.querySelector("body");
  body?.classList.toggle("overflow-hidden")
}

export default Navbar;
