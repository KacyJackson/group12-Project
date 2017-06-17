var btn = document.getElementById("btn");

btn.addEventListener("click", function(){


});

// authentication key
var authKey = "818356de4c7f4ac49a7f1382bc69cfda";

//  variables to hold results
var Name = " John Doe";
var Phone = "770-123-4567";
var Email = "example@email.com";
var city = "Atlanta";
var countryCode = "US";
var stateCode =" GA";
var postalCode = "30312";
var primaryAd = "123 Main St."
var primaryAd2 = "Apt 1";

   var queryURL = "https://proapi.whitepages.com/3.2/identity_check?api_key=818356de4c7f4ac49a7f1382bc69cfda&email_address="+ Email+"&primary.address.city="+ city+"&primary.address.country_code="+ countryCode+"&primary.address.postal_code="+ postalCode+"&primary.address.state_code="+ stateCode+"&primary.address.street_line_1="+ primaryAd+"&primary.address.street_line_2="+ primaryAd2+"&primary.name="+ Name+"&primary.phone="+ Phone+"";

      // Perfoming an AJAX GET request to our queryURL
     
	$.ajax({
		url: queryURL, 
		method: "GET"
	}).done(function (response){
	console.log(response);
	});

	console.log(Name);
	console.log(Phone);
	console.log(Email);
	console.log(city);
	console.log(countryCode);
	console.log(stateCode);
	console.log(postalCode);
	console.log(primaryAd);
	console.log(primaryAd2);



        

     

          




	






	








