
//ADD YOUR FIREBASE LINKS HERE
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
user_name=localStorage.getItem("user_name");
document.getElementById("username").innerHTML="Welcome to Kwitter" + user_name + "!!!";


function addroom(){
 room_name=document.getElementById("addroom").value;
 firebase.database().ref("/").child(room_name).update({
     purpose:"adding room name"
 }); 
 localStorage.setItem("room_name", room_name);
 window.location="kwitter_page.html";
 


}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
console.log("room_name", Room_names);
row="<div class='room_name' id="+ Room_names + "onclick='redirect(this.id)'>#" + Room_names + "</div> <hr>";
document.getElementById("output").innerHTML += row;

      //Start code

      //End code
      });});}
getData();
function redirect(room_name){
console.log(room_name);
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";

}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}




