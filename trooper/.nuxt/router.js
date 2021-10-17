import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4a084c5b = () => interopDefault(import('..\\pages\\Category.vue' /* webpackChunkName: "pages/Category" */))
const _0e578ed5 = () => interopDefault(import('..\\pages\\Checkout.vue' /* webpackChunkName: "" */))
const _1ea384d4 = () => interopDefault(import('..\\pages\\Checkout\\Billing.vue' /* webpackChunkName: "" */))
const _855a5242 = () => interopDefault(import('..\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "" */))
const _14f167b6 = () => interopDefault(import('..\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "" */))
const _41d5d068 = () => interopDefault(import('..\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "" */))
const _f0610eba = () => interopDefault(import('..\\pages\\Checkout.vue' /* webpackChunkName: "pages/Checkout" */))
const _50973b70 = () => interopDefault(import('..\\pages\\Checkout\\Billing.vue' /* webpackChunkName: "pages/Checkout/Billing" */))
const _7663b453 = () => interopDefault(import('..\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "pages/Checkout/Payment" */))
const _5e921d31 = () => interopDefault(import('..\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "pages/Checkout/Shipping" */))
const _481fe8d8 = () => interopDefault(import('..\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "pages/Checkout/ThankYou" */))
const _0d8aa751 = () => interopDefault(import('..\\pages\\ContactUs.vue' /* webpackChunkName: "pages/ContactUs" */))
const _2f795524 = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "" */))
const _e2375388 = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "pages/Home" */))
const _a58c3c58 = () => interopDefault(import('..\\pages\\MyAccount.vue' /* webpackChunkName: "pages/MyAccount" */))
const _38b32b1a = () => interopDefault(import('..\\pages\\MyAccount\\AdressBook.vue' /* webpackChunkName: "pages/MyAccount/AdressBook" */))
const _3e6c8d3b = () => interopDefault(import('..\\pages\\MyAccount\\BillingDetails.vue' /* webpackChunkName: "pages/MyAccount/BillingDetails" */))
const _d5b3529c = () => interopDefault(import('..\\pages\\MyAccount\\LoyaltyCard.vue' /* webpackChunkName: "pages/MyAccount/LoyaltyCard" */))
const _6b825579 = () => interopDefault(import('..\\pages\\MyAccount\\MyNewsletter.vue' /* webpackChunkName: "pages/MyAccount/MyNewsletter" */))
const _7edade19 = () => interopDefault(import('..\\pages\\MyAccount\\MyProfile.vue' /* webpackChunkName: "pages/MyAccount/MyProfile" */))
const _734480ea = () => interopDefault(import('..\\pages\\MyAccount\\MyReviews.vue' /* webpackChunkName: "pages/MyAccount/MyReviews" */))
const _46c776da = () => interopDefault(import('..\\pages\\MyAccount\\OrderHistory.vue' /* webpackChunkName: "pages/MyAccount/OrderHistory" */))
const _3f0081f0 = () => interopDefault(import('..\\pages\\MyAccount\\ShippingDetails.vue' /* webpackChunkName: "pages/MyAccount/ShippingDetails" */))
const _4dc1d7a2 = () => interopDefault(import('..\\pages\\Product.vue' /* webpackChunkName: "pages/Product" */))
const _2d6ec9ea = () => interopDefault(import('..\\pages\\ResetPassword.vue' /* webpackChunkName: "" */))
const _8a3ebc06 = () => interopDefault(import('..\\pages\\ResetPassword.vue' /* webpackChunkName: "pages/ResetPassword" */))
const _1096dc3c = () => interopDefault(import('..\\pages\\MyAccount.vue' /* webpackChunkName: "" */))
const _f8b599a0 = () => interopDefault(import('..\\pages\\Product.vue' /* webpackChunkName: "" */))
const _5edf3ae6 = () => interopDefault(import('..\\pages\\Category.vue' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Category",
    component: _4a084c5b,
    name: "Category___en"
  }, {
    path: "/checkout",
    component: _0e578ed5,
    name: "checkout___en",
    children: [{
      path: "billing",
      component: _1ea384d4,
      name: "billing___en"
    }, {
      path: "payment",
      component: _855a5242,
      name: "payment___en"
    }, {
      path: "shipping",
      component: _14f167b6,
      name: "shipping___en"
    }, {
      path: "thank-you",
      component: _41d5d068,
      name: "thank-you___en"
    }]
  }, {
    path: "/Checkout",
    component: _f0610eba,
    name: "Checkout___en",
    children: [{
      path: "Billing",
      component: _50973b70,
      name: "Checkout-Billing___en"
    }, {
      path: "Payment",
      component: _7663b453,
      name: "Checkout-Payment___en"
    }, {
      path: "Shipping",
      component: _5e921d31,
      name: "Checkout-Shipping___en"
    }, {
      path: "ThankYou",
      component: _481fe8d8,
      name: "Checkout-ThankYou___en"
    }]
  }, {
    path: "/ContactUs",
    component: _0d8aa751,
    name: "ContactUs___en"
  }, {
    path: "/de",
    component: _2f795524,
    name: "home___de"
  }, {
    path: "/Home",
    component: _e2375388,
    name: "Home___en"
  }, {
    path: "/MyAccount",
    component: _a58c3c58,
    name: "MyAccount___en",
    children: [{
      path: "AdressBook",
      component: _38b32b1a,
      name: "MyAccount-AdressBook___en"
    }, {
      path: "BillingDetails",
      component: _3e6c8d3b,
      name: "MyAccount-BillingDetails___en"
    }, {
      path: "LoyaltyCard",
      component: _d5b3529c,
      name: "MyAccount-LoyaltyCard___en"
    }, {
      path: "MyNewsletter",
      component: _6b825579,
      name: "MyAccount-MyNewsletter___en"
    }, {
      path: "MyProfile",
      component: _7edade19,
      name: "MyAccount-MyProfile___en"
    }, {
      path: "MyReviews",
      component: _734480ea,
      name: "MyAccount-MyReviews___en"
    }, {
      path: "OrderHistory",
      component: _46c776da,
      name: "MyAccount-OrderHistory___en"
    }, {
      path: "ShippingDetails",
      component: _3f0081f0,
      name: "MyAccount-ShippingDetails___en"
    }]
  }, {
    path: "/Product",
    component: _4dc1d7a2,
    name: "Product___en"
  }, {
    path: "/reset-password",
    component: _2d6ec9ea,
    name: "reset-password___en"
  }, {
    path: "/ResetPassword",
    component: _8a3ebc06,
    name: "ResetPassword___en"
  }, {
    path: "/de/Category",
    component: _4a084c5b,
    name: "Category___de"
  }, {
    path: "/de/checkout",
    component: _0e578ed5,
    name: "checkout___de",
    children: [{
      path: "billing",
      component: _1ea384d4,
      name: "billing___de"
    }, {
      path: "payment",
      component: _855a5242,
      name: "payment___de"
    }, {
      path: "shipping",
      component: _14f167b6,
      name: "shipping___de"
    }, {
      path: "thank-you",
      component: _41d5d068,
      name: "thank-you___de"
    }]
  }, {
    path: "/de/Checkout",
    component: _f0610eba,
    name: "Checkout___de",
    children: [{
      path: "Billing",
      component: _50973b70,
      name: "Checkout-Billing___de"
    }, {
      path: "Payment",
      component: _7663b453,
      name: "Checkout-Payment___de"
    }, {
      path: "Shipping",
      component: _5e921d31,
      name: "Checkout-Shipping___de"
    }, {
      path: "ThankYou",
      component: _481fe8d8,
      name: "Checkout-ThankYou___de"
    }]
  }, {
    path: "/de/ContactUs",
    component: _0d8aa751,
    name: "ContactUs___de"
  }, {
    path: "/de/Home",
    component: _e2375388,
    name: "Home___de"
  }, {
    path: "/de/MyAccount",
    component: _a58c3c58,
    name: "MyAccount___de",
    children: [{
      path: "AdressBook",
      component: _38b32b1a,
      name: "MyAccount-AdressBook___de"
    }, {
      path: "BillingDetails",
      component: _3e6c8d3b,
      name: "MyAccount-BillingDetails___de"
    }, {
      path: "LoyaltyCard",
      component: _d5b3529c,
      name: "MyAccount-LoyaltyCard___de"
    }, {
      path: "MyNewsletter",
      component: _6b825579,
      name: "MyAccount-MyNewsletter___de"
    }, {
      path: "MyProfile",
      component: _7edade19,
      name: "MyAccount-MyProfile___de"
    }, {
      path: "MyReviews",
      component: _734480ea,
      name: "MyAccount-MyReviews___de"
    }, {
      path: "OrderHistory",
      component: _46c776da,
      name: "MyAccount-OrderHistory___de"
    }, {
      path: "ShippingDetails",
      component: _3f0081f0,
      name: "MyAccount-ShippingDetails___de"
    }]
  }, {
    path: "/de/Product",
    component: _4dc1d7a2,
    name: "Product___de"
  }, {
    path: "/de/reset-password",
    component: _2d6ec9ea,
    name: "reset-password___de"
  }, {
    path: "/de/ResetPassword",
    component: _8a3ebc06,
    name: "ResetPassword___de"
  }, {
    path: "/de/my-account/:pageName?",
    component: _1096dc3c,
    name: "my-account___de"
  }, {
    path: "/de/p/:id/:slug",
    component: _f8b599a0,
    name: "product___de"
  }, {
    path: "/de/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _5edf3ae6,
    name: "category___de"
  }, {
    path: "/my-account/:pageName?",
    component: _1096dc3c,
    name: "my-account___en"
  }, {
    path: "/p/:id/:slug",
    component: _f8b599a0,
    name: "product___en"
  }, {
    path: "/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _5edf3ae6,
    name: "category___en"
  }, {
    path: "/",
    component: _2f795524,
    name: "home___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
