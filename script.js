var mykey=config.MY_KEY;
var myDatabase = config.databaseURL;
var myStorage = config.storageBucket;

function Cat() {
	this.initFirebase();
}

Cat.prototype.initFirebase = function() {
 
  this.auth = firebase.auth();
  this.database = firebase.database();
  this.storage = firebase.storage();
  // Initiates Firebase auth and listen to auth state changes.
  this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
};

var ref = firebase.database().ref("translations/");
console.log(ref);

var eightRef = firebase.database().ref("translations/eight");
console.log(eightRef);
var key = eightRef.key;  // key === "eight"
key = eightRef.child("eight/cat").key;  // key === "last"
console.log("Key: " + key);

ref.on("value", function(snapshot) {
   console.log(snapshot.val());
}, function (error) {
   console.log("Error: " + error.code);
});

var ref = firebase.database().ref("translations/one");
ref.once("value")
  .then(function(snapshot) {
    var a = snapshot.exists();  // true
    var b = snapshot.child("cat").val();
    var c = snapshot.child("english").val(); // true
    var d = snapshot.child("num").val(); // false
    console.log(a + " " + b+ " "+c + " "+ d);
    
    $(document).ready(function() {
    $('#cat-word').append("<p>" + b + "</p>");
    $('#english').append("<p>" + c + "</p>")
  });

  });

  

function toggleSignIn() {
        if (firebase.auth().currentUser) {
          // [START signout]
          firebase.auth().signOut();
          // [END signout]
        } else {
          var email = document.getElementById('email').value;
          var password = document.getElementById('password').value;
          if (email.length < 4) {
            alert('Please enter an email address.');
            return;
          }
          if (password.length < 4) {
            alert('Please enter a password.');
            return;
          }
          // Sign in with email and pass.
          // [START authwithemail]
          firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode === 'auth/wrong-password') {
              alert('Wrong password.');
            } else {
              alert(errorMessage);
            }
            console.log(error);
            document.getElementById('quickstart-sign-in').disabled = false;
            // [END_EXCLUDE]
          });
        // [END authwithemail]
        }
        document.getElementById('quickstart-sign-in').disabled = true;   
      }
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
        initApp();
      };

$(document).ready(function(){
	$('#more').click(function() {
		//move to next kitty
		alert('this will move eventually');
	});

	$('#add').click(function() {
		//open up add functions
		alert('Coming soon!');
	})

	// Get a reference to the database service

	
});

initFirebase();

// 'use strict'
//var firebase = require("firebase");
// var defaultApp = firebase.initializeApp(defaultAppConfig);

// console.log(defaultApp.name);  // "[DEFAULT]"

// // You can retrieve services via the defaultApp variable...
// var defaultStorage = defaultApp.storage();
// var defaultDatabase = defaultApp.database();



