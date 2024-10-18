// import './assets/main.css'
// import '@/assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { initializeApp } from "firebase/app";


// import DataTable from 'primevue/datatable'
// import Column from 'primevue/Column'

const app = createApp(App);

app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

// app.component('DataTable', DataTable)
// app.component('Column', Column)

//firebase
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1ktcwr04K8YjD5BX15FBGkIdPsC6xALI",
  authDomain: "week7-kt.firebaseapp.com",
  projectId: "week7-kt",
  storageBucket: "week7-kt.appspot.com",
  messagingSenderId: "288004909811",
  appId: "1:288004909811:web:20d723b45c9a7a779a6586",
  measurementId: "G-EX34YF1E3J"
};

// Initialize Firebase
initializeApp(firebaseConfig);
app.mount('#app');
