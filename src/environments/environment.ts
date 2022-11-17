// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  BASEURL: 'http://192.168.0.26:8080/api/',

  WEB_DEVELOPER: {
    GET: 'developer-blog/',
    GET_LIST: 'developer-blog/list/',
    INSERT: 'developer-blog/new/',
    UPDATE: 'developer-blog/update/',
    DELETE: 'developer-blog/delete/',

    GET_IMAGEN: 'developer-blog/get-file/',
    SAVE_IMAGEN_BODY: 'developer-blog/save-file/body/',
    SAVE_IMAGEN_HEADER: 'developer-blog/save-file/header/',

  },


};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
