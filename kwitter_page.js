//YOUR FIREBASE LINKS
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
      
     username=localStorage.getItem("user_name")
     room_name=localStorage.getItem("Roomname")
      
     function send(){
           message=document.getElementById("msg").value 
           firebase.database().ref(room_name).push({
                 USER : username,
                 MESSAGE : message,
                 LIKE : 0
           })
           document.getElementById("msg").value=""
     }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id)
         console.log(message_data)
         user=message_data["USER"]
         console.log(user)
         usertag=`<h4>${user}<img src="tick.png" class="user_tick"></h4>`
         msg=message_data["MESSAGE"]
         msgtag=`<h4>${msg}</h4>`
         like=message_data["LIKE"]
         buttontag=`<button class="btn btn-primary" id=${firebase_message_id} value=${like} onclick="update(this.id)"><span class="glyphicon glyphicon-thumbs-up"></span> Like : ${like}</button><hr>`
         document.getElementById("output").innerHTML+=usertag+msgtag+buttontag
         
//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("Roomname")
      localStorage.removeItem("user_name")
      window.location= "index.html"
}

        function update(buttonid){
              getlikes=document.getElementById(buttonid).value
              updatedlikes=Number(getlikes)+1
              firebase.database().ref(room_name).child(buttonid).update({
                    LIKE : updatedlikes
              })
        }
           

