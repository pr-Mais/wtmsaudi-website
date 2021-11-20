import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import 'tailwindcss/tailwind.css';
import { Container } from '../components/common/container';
import { NextSeo } from 'next-seo';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <NextSeo title="Home Page" />

      <div>{t('layout:title')}</div>

      <Container></Container>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(String(locale), ['layout'])),
    },
  };
};

export default Home;
