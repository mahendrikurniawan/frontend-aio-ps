// export const environment = {
//   production: false,
//   defaultauth: 'fackbackend',
//   firebaseConfig: {
//     apiKey: '',
//     authDomain: '',
//     databaseURL: '',
//     projectId: '',
//     storageBucket: '',
//     messagingSenderId: '',
//     appId: '',
//     measurementId: ''
//   }
// };

export const environment = {
  API_URL: 'http://localhost:3179/api/',
  AUTH_URL: 'http://localhost:3179/api/auth/',

  refreshToken: 'update-token',

  login: 'login',

  applications: 'master/application',
  applicationId: 'master/application/',
  userApp: 'master/user-app',
  userAppId: 'master/user-app/',

  image: 'master/image/',
  getImage: 'image/',

  getActivity: 'master/tr_activity_group/allData',
  getAllFillingMechanical: 'master/tr_activity_group/allfillingmechanical',
  insertActivityGroup: 'master/tr_activity_group',
  insertActivity: 'master/tr_activity',
  insertActivityMaterial: 'master/tr_activity_material'
};

