const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  style-src 'self';
  font-src 'self';  
`;

/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = 'electron-renderer';
      config.node = {
        __dirname: true,
      };
    }
    config.output.globalObject = 'this';
    return config;
  },
  transpilePackages: ['shared'],
  reactStrictMode: true,
  experimental: {
    appDir: false,
  },
  headers: async () => {
    const isProd = process.env.NODE_ENV === 'production';

    if (!isProd) return [];

    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
          },
        ],
      },
    ];
  },
  images: {
    unoptimized: true,
  },
};
