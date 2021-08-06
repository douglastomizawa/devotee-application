// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    default: 'http://34.223.220.245',
    cids: 'http://34.223.220.245/api/V1/listCid',
    hospitals: 'http://34.223.220.245/api/V1/listHospitalsCountry',
    login:'http://34.223.220.245/api/V1/login',
    qrCode: 'http://34.223.220.245/api/V1/qrCode',
    forgotPassword: 'http://34.223.220.245/api/V1/forgotPassword',
    proxy: {
      deleteUser: '/devoteeURL/extension-deleteuser.php',
    }
  },

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
