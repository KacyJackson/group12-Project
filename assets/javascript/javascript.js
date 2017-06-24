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
var firstFolder = "";
var name = "";
var address = "";


// //  variables to hold results
// var phoneInput = document.getElementById('Phone');
// var Phone = phoneInput.value;




$("#btn").on("click", function(event) {
  event.preventDefault();

	// Grabbing text the user typed into the search input
	var input = $("#Phone").val().trim();
  $("#Phone").val("");
	var queryURL ="https://proapi.whitepages.com/3.0/phone.json?api_key=dd6cf1d08eeb47038e757269a297655e&phone="+ input;

	$.ajax({
    url: queryURL,
    method: "GET"
  })
  .done(function(response) {
    database.ref().set({
      result: response
    })
  });

  $('#form').hide();

  var nameRef = database.ref('result/belongs_to/0');
  nameRef.on('value', function(data){
    var name = "<strong>Name</strong>: " + data.val().name;
    var gender = "<strong>Gender</strong>: " + data.val().gender;
    var age = "<strong>Age Range</strong>: " + data.val().age_range;

    var display = $('<div>');
    display.attr('id', 'display');
    display.html("<strong><span style='color:#2F6FB9'>IDENTITY</span></strong><br>" + name + "<br>" + gender + "<br>" + age);
    $('#result').html(display);
    $('#check').html("Results");
  },function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

  var addressRef = database.ref('result/current_addresses/0');
  addressRef.on('value', function(data){
    var address = "<br><strong><span style='color:#2F6FB9'>KNOWN ADDRESSES</span></strong><br><strong>Address 1</strong>: " + data.val().street_line_1 + ", " + data.val().city + " " + data.val().state_code + " " + data.val().postal_code;
    var display = $('<div>');
    display.attr('id', 'display');
    display.append(address);
    $('#result').append(display);
  },function(errorObject) {
  console.log("The read failed: " + errorObject.code);
  });

  var addressRef = database.ref('result/current_addresses/1');
  addressRef.on('value', function(data){
    var address = "<strong>Address 2</strong>: " + data.val().street_line_1 + ", " + data.val().city + " " + data.val().state_code + " " + data.val().postal_code;
    var display = $('<div>');
    display.attr('id', 'display');
    display.append(address);
    $('#result').append(display);
  },function(errorObject) {
  console.log("The read failed: " + errorObject.code);
  });

  $('.btn-default').show()

});

function initMap() {
    var lat_longRef = database.ref('result/current_addresses/0/lat_long');
      lat_longRef.on('value', function(data){
      var lati = data.val().latitude;
      console.log(lati);
      var long = data.val().longitude;
      
      var uluru = {lat: lati, lng: long};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: uluru
      });
      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      })
    })
  }

  initMap();
  //var newDiv = $('<div>');
  //newDiv.attr('id', 'map');
  //$('.panel-body').append(newDiv);


   



//var lat_longRef = database.ref('result/current_addresses/0/lat_long');
//lat_longRef.on('value', function(data){
  //console.log("latitude: " + data.val().latitude);
  //console.log("longitude: " + data.val().longitude);
//})
 




 




	
	


        

     

          




	






	








