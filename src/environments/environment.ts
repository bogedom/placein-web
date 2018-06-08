// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyChCYPOnObm8zgot8g73tTNPeJjf6LlgdU',
    authDomain: 'placein-dev.firebaseapp.com',
    databaseURL: 'https://placein-dev.firebaseio.com',
    projectId: 'placein-dev',
    storageBucket: 'placein-dev.appspot.com',
    messagingSenderId: '460357803597'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
