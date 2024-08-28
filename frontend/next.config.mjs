/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      console.log("in next config for webpack");
      config.resolve.fallback = {
        fs: false,
        path: false,
        child_process: false,
        crypto: false,
        os: false,
        http: false,
      }
    console.log("is server is: ", isServer);

    return config;
  }
};

export default nextConfig;
