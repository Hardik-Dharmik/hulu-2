/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "links.papareacr.com",
      "www.pngfind.com",
      "image.tmdb.org",
    ],
  },
};

module.exports = nextConfig;
