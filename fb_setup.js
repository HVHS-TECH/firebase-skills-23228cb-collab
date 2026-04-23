/**************************************************************/
// fb_initialise()
// Initialize firebase, connect to the Firebase project.
// 
// Find the config data in the Firebase console. Cog wheel > Project Settings > General > Your Apps > SDK setup and configuration > Config
//
// Input:  n/a
// Return: n/a
/**************************************************************/
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAw-JJYN5KMslUPEqggLprc8q8e8kDOiVo",
    authDomain: "cedric-bell-12comp.firebaseapp.com",
    databaseURL: "https://cedric-bell-12comp-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "cedric-bell-12comp",
    storageBucket: "cedric-bell-12comp.firebasestorage.app",
    messagingSenderId: "1090473317849",
    appId: "1:1090473317849:web:228f27174807a8200af5c8"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // This log prints the firebase object to the console to show that it is working.
  // As soon as you have the script working, delete this log.
  console.log("Firebase initialize finished:");
  console.log(firebase);
