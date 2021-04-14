var firebaseConfig = {
      apiKey: "AIzaSyCuSuD8Pp4-UxgqPxNyqykwuobmnR266kQ",
      authDomain: "warp-1-36e0b.firebaseapp.com",
      databaseURL: "https://warp-1-36e0b-default-rtdb.firebaseio.com",
      projectId: "warp-1-36e0b",
      storageBucket: "warp-1-36e0b.appspot.com",
      messagingSenderId: "1021895001014",
      appId: "1:1021895001014:web:cf484ac91248c5804e3717"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
       username=localStorage.getItem("user_name")
       document.getElementById("Welcome").innerHTML="Welcome "+username
       
       //Code for adding roomname//
       function addroom(){
             roomname=document.getElementById("cabininput").value 
             firebase.database().ref("/").child(roomname).update({
                   status : "Roomname added"
             })
             localStorage.setItem("Roomname",roomname)
             window.location= "kwitter_page.html"

       }
       
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
           console.log(Room_names)
           roomtag=`<div class="room_name" id=${Room_names} onclick="gotoroom(this.id)">${Room_names}</div><hr>`
           document.getElementById("output").innerHTML+=roomtag
      //End code
      });});}
getData();
         function gotoroom(room){
            localStorage.setItem("Roomname",room)
            window.location="kwitter_page.html"
         }
         function logout(){
               localStorage.removeItem("Roomname")
               localStorage.removeItem("user_name")
               window.location= "index.html"
         }