/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        esmExternals: "loose",
      },
      webpack: (config) => {
        config.experiments = { ...config.experiments, topLevelAwait: true };
        return config;
      },
};

export default nextConfig;
