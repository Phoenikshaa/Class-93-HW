var firebaseConfig = {
    apiKey: "AIzaSyB3sbV3UFZtkG_x0ZgT47NNqbBVEHS86sw",
    authDomain: "chat-app-62f76.firebaseapp.com",
    databaseURL: "https://chat-app-62f76-default-rtdb.firebaseio.com",
    projectId: "chat-app-62f76",
    storageBucket: "chat-app-62f76.appspot.com",
    messagingSenderId: "719477002383",
    appId: "1:719477002383:web:e1308150b72386a2b3a0fa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";



  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names +" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
   document.getElementById("output").innerHTML += row;
  
   //End code
   });});}
getData();

  function logout()
  {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
  }

  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "Kwitter_message.html";
  }


  function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "Kwitter_message.html";
}



