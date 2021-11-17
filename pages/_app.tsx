import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

function WTMWebsite({ Component, pageProps }: AppProps) {
  const {locale} = useRouter()
  return <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
    <Component  {...pageProps} />
  </div>
}

export default WTMWebsite
