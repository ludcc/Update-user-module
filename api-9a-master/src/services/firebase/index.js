const { initializeApp, cert } = require("firebase-admin/app");

const serviceAccount = require("../../utils/constants/service-account.json");

const app = initializeApp({
  credential: cert(serviceAccount),
  databaseURL: 'https://dgs-9a-2e8de.firebaseio.com'
});

module.exports = app;
