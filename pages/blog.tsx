import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { Container } from '../components/common/container';


const Greating = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-blue h-auto ">
            {/* Page Title */}
            <NextSeo title={t('seo:blog')} />
            {/* Page Body */}
            <Container>

            </Container>
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

export default Greating;