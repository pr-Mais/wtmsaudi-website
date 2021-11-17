/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  disDir: 'out',
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'ar',
    localeDetection: false,
  },
}
