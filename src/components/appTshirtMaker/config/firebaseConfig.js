import firebase from 'firebase/app'
import 'firebase/storage'

// Your web app's Firebase configuration
var Config = {
  apiKey: "AIzaSyCn3Yx7kCxD_bS9oIJlmfQS7ypzlK-IV68",
  authDomain: "t-shirt-app-257da.firebaseapp.com",
  databaseURL: "https://t-shirt-app-257da.firebaseio.com",
  projectId: "t-shirt-app-257da",
  storageBucket: "t-shirt-app-257da.appspot.com",
  messagingSenderId: "793662714476",
};
// Initialize Firebase
firebase.initializeApp(Config);

const storage = firebase.storage();

export {
  storage, firebase as default
}  