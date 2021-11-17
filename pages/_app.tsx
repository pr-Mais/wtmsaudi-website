import '../styles/globals.css'
import type { AppProps, } from 'next/app'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo';
import Head from 'next/head'


function WTMWebsite({ Component, pageProps }: AppProps) {
  const {locale} = useRouter()
  return <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
    <Head>
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" key="twcard" />
      <meta name="twitter:creator" content='WTMSaudi' key="twhandle" />

      {/* Open Graph */}
      <meta property="og:title" content='WTM Saudi' key="ogtitle" />
      <meta property="og:description" content="Google's Women Techmakers in Saudi Arabia"  key="ogdesc" />
      <meta property="og:url" content='https://wtmsaudi.com' key="ogurl" />
      <meta property="og:image" content='https://github.com/WTMSaudi/website/blob/main/default-seo-image.png?raw=true' key="ogimage" />
      <meta property="og:site_name" content='WTM Saudi' key="ogsitename" />
      <link rel="icon" href="/favicon.ico" />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <Component  {...pageProps} />
  </div>
}

export default WTMWebsite
