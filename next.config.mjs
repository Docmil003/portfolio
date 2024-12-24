/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portfolio",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    assetPrefix: './', // Necesario para GitHub Pages
    images: {
      unoptimized: true, // Necesario para imágenes estáticas en GitHub Pages
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve = {
          ...config.resolve,
          fallback: {
            net: false,
            dns: false,
            tls: false,
            fs: false,
            request: false,
          },
        };
      }
      return config;
    },
};


export default nextConfig;
