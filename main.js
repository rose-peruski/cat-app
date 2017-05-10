'use strict';


function Catslator() {
  // Shortcuts to DOM Elements.
  this.messageList = document.getElementById('messages');
  this.messageForm = document.getElementById('message-form');
  this.messageInput = document.getElementById('message');
  this.submitButton = document.getElementById('submit');
  this.submitImageButton = document.getElementById('submitImage');
  this.imageForm = document.getElementById('image-form');
  this.mediaCapture = document.getElementById('mediaCapture');
  this.userPic = document.getElementById('user-pic');
  this.userName = document.getElementById('user-name');
  this.signInButton = document.getElementById('sign-in');
  this.signOutButton = document.getElementById('sign-out');
  this.signInSnackbar = document.getElementById('must-signin-snackbar');

  // Saves message on form submit.
  this.messageForm.addEventListener('submit', this.saveMessage.bind(this));
  this.signOutButton.addEventListener('click', this.signOut.bind(this));
  this.signInButton.addEventListener('click', this.signIn.bind(this));

  // Toggle for the button.
  var buttonTogglingHandler = this.toggleButton.bind(this);
  this.messageInput.addEventListener('keyup', buttonTogglingHandler);
  this.messageInput.addEventListener('change', buttonTogglingHandler);

  // Events for image upload.
  this.submitImageButton.addEventListener('click', function(e) {
    e.preventDefault();
    this.mediaCapture.click();
  }.bind(this));
  this.mediaCapture.addEventListener('change', this.saveImageMessage.bind(this));

  this.initFirebase();
}

Catslator.prototype.initFirebase = function() {
  // Shortcuts to Firebase SDK features.
  this.auth = firebase.auth();
  this.database = firebase.database();
  this.storage = firebase.storage();
  // Initiates Firebase auth and listen to auth state changes.
  this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
};




// var eightRef = firebase.database().ref("translations/eight");
// console.log(eightRef);
// var key = eightRef.key;  // key === "eight"
// key = eightRef.child("eight/cat").key;  // key === "last"
// console.log("Key: " + key);

// ref.on("value", function(snapshot) {
//    console.log(snapshot.val());
// }, function (error) {
//    console.log("Error: " + error.code);
// });

// var ref = firebase.database().ref("translations/one");
// ref.once("value")
//   .then(function(snapshot) {
//     var a = snapshot.exists();  // true
//     var b = snapshot.child("cat").val();
//     var c = snapshot.child("english").val(); // true
//     var d = snapshot.child("num").val(); // false
//     console.log(a + " " + b+ " "+c + " "+ d);
    
//     $(document).ready(function() {
//     $('#cat-word').append("<p id='kitty-word'>" + b + "</p>");
//     $('#english').append("<p>" + c + "</p>")
//   });

//   });

 //sign in code 

// function toggleSignIn() {
//         if (firebase.auth().currentUser) {
//           // [START signout]
//           firebase.auth().signOut();
//           // [END signout]
//         } else {
//           var email = document.getElementById('email').value;
//           var password = document.getElementById('password').value;
//           if (email.length < 4) {
//             alert('Please enter an email address.');
//             return;
//           }
//           if (password.length < 4) {
//             alert('Please enter a password.');
//             return;
//           }
//           // Sign in with email and pass.
//           // [START authwithemail]
//           firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//             // Handle Errors here.
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             // [START_EXCLUDE]
//             if (errorCode === 'auth/wrong-password') {
//               alert('Wrong password.');
//             } else {
//               alert(errorMessage);
//             }
//             console.log(error);
//             document.getElementById('quickstart-sign-in').disabled = false;
//             // [END_EXCLUDE]
//           });
//         // [END authwithemail]
//         }
//         document.getElementById('quickstart-sign-in').disabled = true;   
//       }
      function initApp() {
        // Listening for auth state changes.
        // [START authstatelistener]
        firebase.auth().onAuthStateChanged(function(user) {
          // [START_EXCLUDE silent]
          document.getElementById('quickstart-verify-email').disabled = true;
          // [END_EXCLUDE]
          if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            // [START_EXCLUDE]
            document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
            document.getElementById('quickstart-sign-in').textContent = 'Sign out';
            
             var ref = firebase.database().ref("translations/");

            ref.on("value", function(snapshot) {
              value = snapshot.val();
              keyValues = Object.values(value);
             var keyNames = Object.keys(value);
              console.log("ref value:" + value);
              console.log("key values: " + keyValues);
              console.log("key names: " + keyNames);
          
              for (var i in keyNames) {
                document.getElementById('cat' + i).innerHTML = "<p>" + keyValues[i].cat + ": " + keyValues[i].english + "</p>";
              }
            })  ;
            
            
            if (!emailVerified) {
              document.getElementById('quickstart-verify-email').disabled = false;
            }
            // [END_EXCLUDE]
          } else {
            // User is signed out.
            // [START_EXCLUDE]
            document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
            document.getElementById('quickstart-sign-in').textContent = 'Sign in';
            
          }
          // [START_EXCLUDE silent]
          document.getElementById('quickstart-sign-in').disabled = false;
          // [END_EXCLUDE]
        });
        // [END authstatelistener]
        document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
        
      }
      
      window.onload = function() {
         window.Catslator = new  Catslator();
        initApp();
       
        
      };

      