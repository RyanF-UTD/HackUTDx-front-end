import { boot } from "quasar/wrappers";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import VueApexCharts from "vue3-apexcharts";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyCKJxOmbh98QY2_pU-TewP03JT1pDC-6b8",
  authDomain: "hackutdx-63bae.firebaseapp.com",
  projectId: "hackutdx-63bae",
  storageBucket: "hackutdx-63bae.appspot.com",
  messagingSenderId: "81931069527",
  appId: "1:81931069527:web:5f8354cce0669bd8389b12",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and get a reference to the service

export const auth = getAuth(app);
export const db = getFirestore(app);

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files

export default boot(async ({ app }) => {
  app.use(VueApexCharts);
});
