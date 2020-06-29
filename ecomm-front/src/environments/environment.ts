// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  product_service_url: 'http://127.0.0.1:8000/api/products',
  user_service_url: 'http://127.0.0.1:8000/api/users',
  cart_service_url: 'http://127.0.0.1:8000/api/cart/{0}',
  order_service_url: 'http://127.0.0.1:8000/api/orders/{0}',
  client_id: 'ecomm-front',
  client_secret: 'ecommfront123',
  auth_url: 'http://127.0.0.1:8000/oauth/token',
  signup_url: 'http://127.0.0.1:8000/auth/signup'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
