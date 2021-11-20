import { Params } from 'next/dist/server/router';
import Image from 'next/image';
import Link from 'next/link';

const Footer = ({ ...pageProps }: Params) => {
  return (
    <div className="bg-blue footer h-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 ">
        <div className="flex justify-between items-top py-7">
          <div className="flex flex-col pt-2">
            <div className="text-white text-xl pb-4">مجموعات مطوري Google</div>
            <div className="text-white font-thin pb-2">مجتمع Google السحابي السعودي</div>
            <div className="text-white font-thin pb-2">أندية الطلبة المطورين</div>
            <div className="text-white font-thin pb-2">خبراء مطوري Google</div>
          </div>
          <div className="flex flex-col pt-2">
            <div className="text-white text-xl pb-4">مصادر مفيدة</div>
            <div className="text-white font-thin pb-2">اكتب في مدونتنا</div>
            <div className="text-white font-thin pb-2">تقديم طلب انضمام كمتحدثة</div>
            <div className="text-white font-thin pb-2">كن راعياً لنا</div>
          </div>
          <div>
            {' '}
            <Link href="/">
              <Image src="/logo-white.svg" alt="WTMSaudi Logo White" width="300" height="50" />
            </Link>
          </div>
        </div>
        <div className="text-white font-thin py-8 justify-center flex">copyright </div>
      </div>
    </div>
  );
};

export default Footer;
