import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

function WTMWebsite({ Component, pageProps }: AppProps) {
  const {locale} = useRouter()
  return <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
    <DefaultSeo {...SEO} />
    <Component  {...pageProps} />
  </div>
}

export default WTMWebsite
