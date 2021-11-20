import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { Container } from '../components/common/container';

import 'tailwindcss/tailwind.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Page Title */}
      <NextSeo title={t('seo:home')} />
      {/* Page Body */}
      <Container></Container>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(String(locale), ['seo', 'common', 'layout'])),
    },
  };
};

export default Home;
