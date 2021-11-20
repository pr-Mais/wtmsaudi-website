import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/layout';
import 'tailwindcss/tailwind.css';
import { appWithTranslation, useTranslation } from 'next-i18next';
import { Fragment } from 'react';
import { DefaultSeo } from 'next-seo';

function WTMWebsite({ Component, pageProps, router }: AppProps) {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Layout>
        <DefaultSeo
          description=""
          title={t('layout:title')}
          titleTemplate={`%s | ${t('layout:title')}`}
          canonical={process.env.NEXT_PUBLIC_BASE_URL + router.asPath}
          twitter={{
            cardType: 'summary',
            site: '@WTM',
            handle: 'WTMSaudi',
          }}
          openGraph={{
            title: '',
            site_name: 'WTM',
            description: '',
            locale: router.locale,
            type: 'website',
            url: 'https://wtmsaudi.com' + router.asPath,
            images: [
              {
                url: '/images/wtm.png',
                alt: 'WTM',
                type: 'png',
              },
            ],
          }}
        />
        <style jsx global>{`
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          #__next main {
            flex: 1;
            overflow-x: hidden;
            background-color: white;
          }
        `}</style>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default appWithTranslation(WTMWebsite);
