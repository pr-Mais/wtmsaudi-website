import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Head from 'next/head';

import Layout from '../components/layout';
import 'tailwindcss/tailwind.css';

function WTMWebsite({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <div dir={dir}>
      <Head>
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta name="twitter:creator" content="WTMSaudi" key="twhandle" />

        {/* Open Graph */}
        <meta property="og:title" content="WTM Saudi" key="ogtitle" />
        <meta property="og:description" content="Google's Women Techmakers in Saudi Arabia" key="ogdesc" />
        <meta property="og:url" content="https://wtmsaudi.com" key="ogurl" />
        <meta
          property="og:image"
          content="https://github.com/WTMSaudi/website/blob/main/default-seo-image.png?raw=true"
          key="ogimage"
        />
        <meta property="og:site_name" content="WTM Saudi" key="ogsitename" />
        <link rel="icon" href="/favicon/favicon.ico" />

        {/* Fav Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default WTMWebsite;
