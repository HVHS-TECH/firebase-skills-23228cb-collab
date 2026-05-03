/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");

/**************************************************************/
// helloWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Hello World"
// 
// This uses the set() operation to write the key:value pair "message":"Hello World"
// The ref('/') part tells the operation to write to the base level of the database "/"
// This means it replaces the whole database with message:Hello World
/**************************************************************/
function helloWorld() {
  console.log("Running helloWorld()")
  firebase.database().ref('/').set(
    {
      message: 'Hello World!'
    }
  )
}
function byeWorld() {
  console.log("Running byeWorld()")
  firebase.database().ref('/').set(
    {
      message: 'bye World!'
    }
  )
}
function simpleRead() {
  console.log("Reading message");
  firebase.database().ref('/').child('age').once('value', display, fb_readError);
  console.log("Leaving simpleRead")

}
function displayRead(snapshot) {
  //console.log("Running displayRead(), the message is: " + snapshot.val())
  console.log(snapshot.val())
  HTML_OUTPUT.innerHTML = snapshot.val();
}
function display(snapshot) {
  var dbData = snapshot.val();
  if (dbData == null) { // if there is no data, dbData will be null.
    console.log('There was no record when trying to read the message');
  }
  else {
    console.log("The message is: " + dbData)
  }
}
function fb_readListener() {
  console.log("read listener");
  firebase.database().ref('/message').on('value', displayRead)
}
function complexWrite() {
  firebase.database().ref('/').set(
    {
      users: {
        age:{
          bernie_sanders:1776,
          cameron: 1964,
          JFK:1973,
        },
        height:{
          bernie_sanders:670,
          cameron:654,
          JFK:737,
        },
      }
    }
  )
}
let age = 1973
let usr1 = "bernie_sanders"
function changeAge(){
  firebase.database().ref('/users/age/'+usr1).set(
    age,
  )
}
function fb_readAge(){
  console.log('reading age');
 firebase.database().ref('/users/age/').once('value', fb_displayAge, fb_error)
}
function fb_error(){
  console.log(errorMessage)
}
function fb_displayAge(snapshot){
  console.log("bernie sanders got "+snapshot.val()["bernie_sanders"]+"age")
}