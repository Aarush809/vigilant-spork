
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyATesDAglCZGWqruPrxibKP5S1R8QPRG0s",
    authDomain: "kwitter-16a50.firebaseapp.com",
    databaseURL: "https://kwitter-16a50-default-rtdb.firebaseio.com",
    projectId: "kwitter-16a50",
    storageBucket: "kwitter-16a50.appspot.com",
    messagingSenderId: "70079478386",
    appId: "1:70079478386:web:19c42498d8043f20ab20eb",
    measurementId: "G-GJV0DCK787"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
      user_name=document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose:"adding user"
});
  }