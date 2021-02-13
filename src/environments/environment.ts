// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  version: 'v1',
  v1: {
    title: 'MCA',
    subtitle: 'IT company',
    content: 'Founded in 2008, MCA is a company that has been built up from the ground up around our desire to make our client’s projects and visions come to life in best spotlight possible.'
  },
  v2: {
    title: 'Starbucks',
    subtitle: 'Coffee',
    content: 'We’re not just passionate purveyors of coffee, but everything else that goes with a full and rewarding coffeehouse experience.'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
