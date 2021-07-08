 
 // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyC8pvYNMLTlx55BltZHLuhM94rDNhG0_uQ",
      authDomain: "kwitter-88bcc.firebaseapp.com",
      databaseURL: "https://kwitter-88bcc-default-rtdb.firebaseio.com",
      projectId: "kwitter-88bcc",
      storageBucket: "kwitter-88bcc.appspot.com",
      messagingSenderId: "940069122158",
      appId: "1:940069122158:web:52d4396bba204194a2f67f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + room_name);
      row = "<div class='room_name' id="+room_name+" onclick='redirectToRoomName(this.id)' >#" + room_name + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose: "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
console.log(name);
localStorage.setUp("room_name", name);
window.location = "kwitter_page.html";
}