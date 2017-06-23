// Initialize Firebase
  var config = {
    apiKey: "AIzaSyC5yaiVoPynJdJX9pg8IfFJEp98KUdfzic",
    authDomain: "group12-project.firebaseapp.com",
    databaseURL: "https://group12-project.firebaseio.com",
    projectId: "group12-project",
    storageBucket: "group12-project.appspot.com",
    messagingSenderId: "415213458406"
  };
  firebase.initializeApp(config);

var btn = document.getElementById("btn");
var database = firebase.database();



// //  variables to hold results
// var phoneInput = document.getElementById('Phone');
// var Phone = phoneInput.value;


var Phone = ""; 


$("#Phone").val(Phone);

$("#btn").on("click", function(event) {
  event.preventDefault();

	// Grabbing text the user typed into the search input
	var input = $("#Phone").val().trim();
  $("#Phone").val("");
	var queryURL ="https://proapi.whitepages.com/3.0/phone.json?api_key=bbefe26042d944dbbf213f36a76be0e0&phone="+ input;

	$.ajax({
    url: queryURL,
    method: "GET"
  })
  .done(function(response) {
    console.log(response);
    database.ref().set({
      result: response
    })
  });   	

});

var latRef = database.ref('result/current_addresses/0/lat_long/latitude');
var longRef = database.ref('result/current_addresses/0/lat_long/longitude');
latRef.on('value', function(snapshot) {
  console.log(snapshot.val());
longRef.on('value', function(snapshot) {
console.log(snapshot.val());
});
});
 

 




 




	
	


        

     

          




	






	








