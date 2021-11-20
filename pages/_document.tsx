import Document, { Head, Main, NextScript, Html } from "next/document";

/* -------------------------------------------------------------------------- */
/*                                  DOCUMENT                                  */
/* -------------------------------------------------------------------------- */

export default class NextDocument extends Document {
  render() {
    /* -------- Just getting direction and language inside html elements -------- */

    const props = this.props.__NEXT_DATA__;

    const dir = props.locale === "ar" ? "rtl" : "ltr";
    const lang = props.locale || "ar";

    return (
      <Html lang={lang} dir={dir} className="antialiased rtl:font-dubai">
        <Head>
          <link
            rel="preload"
            href="/fonts/Dubai-Bold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="true"
          />
          <link
            rel="preload"
            href="/fonts/Dubai-Light.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="true"
          />
          <link
            rel="preload"
            href="/fonts/Dubai-Medium.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="true"
          />
          <link
            rel="preload"
            href="/fonts/Dubai-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="true"
          />

          <link rel="icon" href="/favicon/favicon.ico" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
        </Head>
        <body dir={dir} id="body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
