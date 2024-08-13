const path = require('path');

const nextConfig = {
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.images.pexels.com',
      }
    ]
  }
}

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
};