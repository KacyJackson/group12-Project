var btn = document.getElementById("btn");

btn.addEventListener("click", function(){


});



// //  variables to hold results
// var phoneInput = document.getElementById('Phone');
// var Phone = phoneInput.value;


var Phone = ""; 




   // var queryURL = "https://proapi.whitepages.com/3.2/identity_check?api_key=818356de4c7f4ac49a7f1382bc69cfda&email_address="+ Email+"&primary.address.city="+ city+"&primary.address.country_code="+ countryCode+"&primary.address.postal_code="+ postalCode+"&primary.address.state_code="+ stateCode+"&primary.address.street_line_1="+ primaryAd+"&primary.address.street_line_2="+ primaryAd2+"&primary.name="+ Name+"&primary.phone="+ Phone+"";
        // Perfoming an AJAX GET request to our queryURL
     
 

	 $("#Phone").val(Phone);

	  $("#btn").on("click", function(event) {
  // This line allows us to take advantage of the HTML "submit" property
  // This way we can hit enter on the keyboard and it registers the search
  // (in addition to clicks).
  event.preventDefault();

	// Grabbing text the user typed into the search input
  	 var input = $("#Phone").val().trim();
  	 var queryURL ="https://proapi.whitepages.com/3.0/phone.json?api_key=bbefe26042d944dbbf213f36a76be0e0&phone="+ input;
  	 $.ajax({

  // The 'type' property sets the HTTP method.
  // A value of 'PUT' or 'DELETE' will trigger a preflight request.
  type: 'GET',

 
  url: queryURL,

  
  contentType: 'text/plain',

  xhrFields: {
    
    withCredentials: false
  },

  headers: {
    
  },

  success: function(response) {
   console.log(response);
  },

  error: function() {
  }
});
 


  	

});



 

 




 




	console.log(Phone);
	


        

     

          




	






	








