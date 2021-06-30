//완료
//firebase.js
import firebase from "firebase/app";
import "firebase/firestore";


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD_JUXKzNiUQOm2yP0vBnY4os-rX6uEagQ",
    authDomain: "mydictionary-a3b44.firebaseapp.com",
    projectId: "mydictionary-a3b44",
    storageBucket: "mydictionary-a3b44.appspot.com",
    messagingSenderId: "206569074281",
    appId: "1:206569074281:web:3480acb48c228ff0c1fcf8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };