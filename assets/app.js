console.log("Initialize Firebase")

var config = {
    apiKey: "AIzaSyArIMTLwJabLoPUxuJjslSgz6xVM_1m6G8",
    authDomain: "test-e3d0c.firebaseapp.com",
    databaseURL: "https://test-e3d0c.firebaseio.com",
    projectId: "test-e3d0c",
    storageBucket: "test-e3d0c.appspot.com",
    messagingSenderId: "807317495317"
};
console.log("firebase.initializeApp(config)")
firebase.initializeApp(config);

console.log("var database = firebase.database();")
var database = firebase.database();

$submitButton = $("#submit-button")
console.log ("$submitButton", $submitButton);

// Whenever a user clicks the submit-bid button
$("#submit-button").on("click", function (event) {
    // Prevent form from submitting
    event.preventDefault();
    console.log("submit-button was clicked");

    var name = $("#name").val().trim();
    var destination = $("#destination").val();
    var firstTrain = $("#first-train").val();
    var frequency = $("#frequency").val();

    var newTrain = {
        name: name,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency
    }

    database.ref().push(newTrain);
});