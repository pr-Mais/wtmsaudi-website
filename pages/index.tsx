import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { Container } from '../components/common/container';


const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Page Title */}
      <NextSeo title={t('seo:home')} />
      {/* Page Body */}
      {/* <Alert /> */}
      <Greating />
      <Container>
      </Container>
    </div>
  );
};

const Greating = () => {
  const { t } = useTranslation();

  return (
    //temp to test scroll 
    <div className="bg-blue-50 h-screen w-full ">
      <div className="container mx-auto px-2">
        <h1> {t('layout:title')}</h1>
      </div>
    </div>
  );
};

const Alert = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-800 h-10 w-full ">
      <div className="container mx-auto px-2">
        <p></p>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(String(locale), ['seo', 'common', 'layout'])),
    },
  };
};

export default Home;
