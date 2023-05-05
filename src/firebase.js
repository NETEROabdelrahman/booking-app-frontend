import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyDSh9nw3zrcGWwKjFBWWepqZmhNC_IliYY",
  authDomain: "booking-app-13a37.firebaseapp.com",
  projectId: "booking-app-13a37",
  storageBucket: "booking-app-13a37.appspot.com",
  messagingSenderId: "410023018340",
  appId: "1:410023018340:web:4499f932a5a683f0e3c471",
  measurementId: "G-E6HPC065VN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage();
export const storageRef = ref(storage,'images')
// export default storageRef;
















// import firebase from "firebase"



// const firebaseConfig = {
//     apiKey: "AIzaSyBvyFKUAAZEWNfddrQFusuoLnPBuMdqsBU",
//     authDomain: "netflix-clone-52090.firebaseapp.com",
//     projectId: "netflix-clone-52090",
//     storageBucket: "netflix-clone-52090.appspot.com",
//     messagingSenderId: "389607862759",
//     appId: "1:389607862759:web:d24b443fa64d34540a4d42",
//     measurementId: "G-35R97KBR4R"
// };
  

// firebase.initializeApp(firebaseConfig)
// const storage = firebase.storage()