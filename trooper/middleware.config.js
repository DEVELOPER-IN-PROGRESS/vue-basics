module.exports = {
  integrations: {
    shopify: {
      location: '@vue-storefront/shopify-api/server',
      configuration: {
        api: {
          domain:'borginnburkes.myshopify.com',
          storefrontAccessToken: '938b8783ccb7aee223f66c1d2d58a3fe'
        },
        currency: 'USD',
        country: 'US'
      }
    }
  }
};
