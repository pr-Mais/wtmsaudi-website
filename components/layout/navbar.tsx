import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

type NavbarItemProps = {
  label: React.ReactNode;
};

const NavbarItem = ({ label }: NavbarItemProps) => {
  return (
    <div className="rtl:mr-14 ltr:ml-14 hover:text-blue text-gray-500">
      <Link href="/">
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
        className="fixed sm:hidden bg-red-500 inset-y-0 ltr:right-0 rtl:left-0 z-50 overflow-hidden"
      >
        <button onClick={close}>close</button>
      </motion.div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6">
          <div className="flex justify-end flex-shrink-0">
            <Link href="/">
              <a>
                <Image src="/logo.svg" alt="WTMSaudi Logo" width={200} height={50} />
              </a>
            </Link>
          </div>
          <div className="sm:flex hidden justify-start">
            <div className="flex">
              <NavbarItem label={t('layout:navbar.blog')}></NavbarItem>
              <NavbarItem label={t('layout:navbar.about')}></NavbarItem>
              <NavbarItem label={t('layout:navbar.contact')}></NavbarItem>
            </div>
          </div>
          <div className="flex-grow block sm:hidden">
            <button onClick={open}>Menu Button</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
