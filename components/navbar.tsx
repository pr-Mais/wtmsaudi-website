import { Params } from 'next/dist/server/router';
import Image from 'next/image';

const Navbar = ({ ...pageProps }: Params) => {
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:space-x-10">
          <div className="flex justify-start lg:flex-1">
            <div className="flex">
              <div className="ml-14 hover:text-blue">
                <a href="/" rel="noopener noreferrer">
                  <div>المدونة</div>
                </a>
              </div>
              <div className="ml-14 hover:text-blue">
                <a href="/" rel="noopener noreferrer">
                  <div>عنا</div>
                </a>
              </div>
              <div className="ml-14 hover:text-blue">
                <a href="/" rel="noopener noreferrer">
                  <div>يوم المرأة العالمي</div>
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-end lg:flex-1">
            <a href="/" rel="noopener noreferrer">
              <Image src="/logo.svg" alt="WTMSaudi Logo" width={200} height={50} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
