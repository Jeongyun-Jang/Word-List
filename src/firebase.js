//완료
//firebase.js
import firebase from "firebase/app";
import "firebase/firestore";


// Your web app's Firebase configuration
var firebaseConfig = {
    /*apiKey: "AIzaSyD_JUXKzNiUQOm2yP0vBnY4os-rX6uEagQ",
    authDomain: "mydictionary-a3b44.firebaseapp.com",
    projectId: "mydictionary-a3b44",
    storageBucket: "mydictionary-a3b44.appspot.com",
    messagingSenderId: "206569074281",
    appId: "1:206569074281:web:3480acb48c228ff0c1fcf8"
*/
    apiKey: "AIzaSyDKClOp-r42fDQSvecb_Cc8_QyEMxclRH8",
    authDomain: "word-list-62725.firebaseapp.com",
    projectId: "word-list-62725",
    storageBucket: "word-list-62725.appspot.com",
    messagingSenderId: "694665122611",
    appId: "1:694665122611:web:498eb7ea7b4d080f392446",
    measurementId: "G-BVL7L1B7ZE"
    
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };