// module.export = {
//     reactStrictMode: true
// }

// const withImages = require('next-images');
// next.config.js

module.exports = {
    async rewrites() {
      return [
        { source: '/menu/appetizers', destination: '/menu?subpage=appetizers' },
        { source: '/menu/localdishes', destination: '/menu?subpage=localdishes' },
        { source: '/menu/shakes', destination: '/menu?subpage=shakes' },
        { source: '/menu/beverages', destination: '/menu?subpage=beverages' },
      ];
    },
  };
  
  

// module.exports = withImages();

// images: {
//     formats: ['image/webp'],
//     },