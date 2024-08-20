/** @type {import('next').NextConfig} */
// next.config.js
module.exports = {
  analyticsId:null,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}
