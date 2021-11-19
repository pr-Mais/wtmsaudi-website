import type { NextPage } from 'next';
import { Params } from 'next/dist/server/router';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import 'tailwindcss/tailwind.css';

const Home: NextPage = ({ lngDict }: Params) => {
  const arrow = <span dangerouslySetInnerHTML={{ __html: lngDict.arrow }}></span>;

  return (
    <div>
      <Head>
        <title>
          {lngDict.name.title} | {lngDict.name.sub}
        </title>
        <meta name="description" content={lngDict.name.desc} />
      </Head>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const language = await import(`../locales/${locale}.json`);

  return {
    props: {
      lngDict: language.default,
      locale,
    },
  };
};

export default Home;
