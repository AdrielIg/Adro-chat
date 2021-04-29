import { firebase } from "@firebase/app"
import "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyARNNhO2Eu70jlEKN8HRN-yP_koTensRCI",
    authDomain: "adro-chat.firebaseapp.com",
    projectId: "adro-chat",
    storageBucket: "adro-chat.appspot.com",
    messagingSenderId: "290349816046",
    appId: "1:290349816046:web:a34f5b9c8487cf5f44bbff"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
