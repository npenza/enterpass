/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env: {
    CLIENT_URL: process.env.CLIENT_URL,
    PUBLIC_ANON_KEY: process.env.PUBLIC_ANON_KEY,
  },
};

