import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyASIyjkF_CgReX_gQNLGuApKpFFClxq7ZQ",
    authDomain: "automotive-fe630.firebaseapp.com",
    projectId: "automotive-fe630",
    storageBucket: "automotive-fe630.appspot.com",
    messagingSenderId: "711577259329",
    appId: "1:711577259329:web:954a9fd57ce8a719c1e5c0",
    measurementId: "G-20RXVF2GJR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const imageDb = getStorage(app)
