/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["upload.wikimedia.org", "links.papareacr.com", "www.pngfind.com"],
  },
};

module.exports = nextConfig;
