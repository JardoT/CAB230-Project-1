//Function To Display Popup
function div_show() {
document.getElementById('grayed-box').style.display = "block";
document.getElementById('popup-login').style.visibility = "visible";
}
//Function to Hide Popup
function div_hide() {
document.getElementById('grayed-box').style.display = "none";
document.getElementById('popup-login').style.visibility = "hidden";
}


//START SEARCH
function searchData() {
  var suburb = document.getElementById('suburb');
  selectedSuburb = suburb.options[suburb.selectedIndex];
    
    //Clear previously selected data
    for (var i = 0; i < 367; i++) {
      document.getElementById(i).style.display = "none";
    }

    if (selectedSuburb.innerHTML == "All Suburbs") {
      for (var i = 0; i < 367; i++) {
        document.getElementById(i).style.display = "block";
      }
    }

    //Show selected data
    for (var i = 0; i < 192; i++) {
      var suburbCheck = document.getElementById('result-suburb' + i.toString());
      if (selectedSuburb.innerHTML == suburbCheck.innerHTML) {
        document.getElementById(i).style.display = "block";
      }
    }
}
//END SEARCH


//START SHOW INDIVIDUAL ITEM
function getItem(id) {
  //set values derived from selected park
  var parkName = document.getElementById('result-name' + id).innerHTML;
  var parkSuburb = document.getElementById('result-suburb' + id).innerHTML;
  var parkRating = document.getElementById(id + 'rating').innerHTML;
  var meta = document.getElementById('meta' + id);
  var parkCode = meta.getAttribute('park-code');
  var parkStreet = meta.getAttribute('street');
  var lat = meta.getAttribute('latitude');
  var long = meta.getAttribute('longitude');

  //store values
  localStorage.setItem("parkName", parkName);
  localStorage.setItem("parkSuburb", parkSuburb);
  localStorage.setItem("parkRating", parkRating);
  localStorage.setItem("parkCode", parkCode);
  localStorage.setItem("parkStreet", parkStreet);
  localStorage.setItem("lat", lat);
  localStorage.setItem("long", long);
  
  //switch page
  window.location = "individual_item.html";
}

function showInformation() {

  //retrieve values
  var parkName = localStorage.getItem("parkName");
  var parkSuburb = localStorage.getItem("parkSuburb");
  var parkStreet = localStorage.getItem("parkStreet");
  var parkCode = localStorage.getItem("parkCode");
  var parkRating = localStorage.getItem("parkRating");

  if (parkName == '') { //shows error if no information is available
    document.getElementById('no-load-error').style.display = "block";
    document.getElementById('park-information').style.display = "none";
  } else {
    document.getElementById('no-load-error').style.display = "none";
    document.getElementById('park-information').style.display = "block";
  }

  //print values  
  document.getElementById('park-name').innerHTML = parkName;
  document.getElementById('park-suburb').innerHTML = parkSuburb;
  document.getElementById('park-street').innerHTML = parkStreet;
  document.getElementById('park-code').innerHTML = parkCode;
  document.getElementById('park-rating').innerHTML = "Average Rating: " + parkRating + "/5";

  switch (parseInt(parkRating)) { //TEMPORARILY HARDCODED RATINGS
    case 1:
      rating1 = "this park is horrible- litter everywhere";
      rating2 = "do not recommend";
      rating3 = "save your time and go somewhere cleaner";
      document.getElementById('rating-1-text').innerHTML = rating1;
      document.getElementById('rating-2-text').innerHTML = rating2;
      document.getElementById('rating-3-text').innerHTML = rating3;

      document.getElementById('rating-1-rate').innerHTML = "1";
      document.getElementById('rating-2-rate').innerHTML = "1";
      document.getElementById('rating-3-rate').innerHTML = "1";
      break;
    case 2:
      rating1 = "Pretty decent park, fresh air";
      rating2 = "absolutely horrible park";
      rating3 = "Dirty, but could be worse";
      document.getElementById('rating-1-text').innerHTML = rating1;
      document.getElementById('rating-2-text').innerHTML = rating2;
      document.getElementById('rating-3-text').innerHTML = rating3;

      document.getElementById('rating-1-rate').innerHTML = "3";
      document.getElementById('rating-2-rate').innerHTML = "1";
      document.getElementById('rating-3-rate').innerHTML = "2";
      break;
    case 3:
      rating1 = "Great park!!";
      rating2 = "pretty good park";
      rating3 = "park is somewhat small, other then that, its alright";
      document.getElementById('rating-1-text').innerHTML = rating1;
      document.getElementById('rating-2-text').innerHTML = rating2;
      document.getElementById('rating-3-text').innerHTML = rating3;

      document.getElementById('rating-1-rate').innerHTML = "4";
      document.getElementById('rating-2-rate').innerHTML = "3";
      document.getElementById('rating-3-rate').innerHTML = "2";
      break;
    case 4:
      rating1 = "Excellent park, lots of fun";
      rating2 = "great park for the family";
      rating3 = "very clean and well maintained";
      document.getElementById('rating-1-text').innerHTML = rating1;
      document.getElementById('rating-2-text').innerHTML = rating2;
      document.getElementById('rating-3-text').innerHTML = rating3;

      document.getElementById('rating-1-rate').innerHTML = "4";
      document.getElementById('rating-2-rate').innerHTML = "4";
      document.getElementById('rating-3-rate').innerHTML = "4";
      break;
    case 5:
      rating1 = "Best park i've ever been to";
      rating2 = "Absolutely fantastic park";
      rating3 = "it's a very good park- would definitely recommend";
      document.getElementById('rating-1-text').innerHTML = rating1;
      document.getElementById('rating-2-text').innerHTML = rating2;
      document.getElementById('rating-3-text').innerHTML = rating3;

      document.getElementById('rating-1-rate').innerHTML = "5";
      document.getElementById('rating-2-rate').innerHTML = "5";
      document.getElementById('rating-3-rate').innerHTML = "5";
      break;
  }
}

function initMap() {

  var lati = parseFloat(localStorage.getItem("lat"));
  var long = parseFloat(localStorage.getItem("long"));

  var park = {lat: lati, lng: long};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: park
  });
  var marker = new google.maps.Marker({
    position: park,
    map: map
  });
}
//END SHOW INDIVIDUAL ITEM

//START REGISTRATION VALIDATION
function clearAllErrors() {
  var allElementId = ["username-missing", "username-short", "email-missing", "email-invalid", "phone-invalid", "dob-invalid", "password-missing", "password-short", "password-mismatch", "confirm-password-missing"];

  for (i = 0; i < allElementId.length; i++) {
    document.getElementById(allElementId[i]).style.display = "none";;
  }
}

function showError(errorId) {
  document.getElementById(errorId).style.display = "inline";
}

function validateUsername() {
	var username = document.getElementById('username');

	if (username.value == '') {
		showError("username-missing");
		return false;
	} else if (username.value.length < 4) {
    showError("username-short");
		return false;
	} else {
    return true;
  }
}

function validateEmail() {
  var email = document.getElementById('email');
  var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,})+$/;

  if (email.value == '') {
    showError("email-missing");
    return false;
  } else if (!emailRegex.test(email.value)) {
    showError("email-invalid");
    return false;
  } else {
    return true;
  }
}

function validatePhone() {
  var phone = document.getElementById('phone');
  var phoneRegex = /^[0-9]{10}$/; 

  if (!phoneRegex.test(phone.value) && phone.value != '') {
    showError("phone-invalid");
    return false;
  } else {
    return true;
  }
}

function validateDateOfBirth() {
  var dob = document.getElementById('dob');
  var dobRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

  if (!dobRegex.test(dob.value) && dob.value != '') {
    showError("dob-invalid");
    return false;
  } else {
    return true;
  }
}

function validatePassword() {
  var password = document.getElementById("password");

  if (password.value == '') {
    showError("password-missing");
    return false;
  } else if (password.value.length < 6) {
    showError("password-short");
    return false;
  } else {
    return true;
  }
}

function validateConfirmPassword() {
  var password = document.getElementById("password");
  var confirmPassword = document.getElementById("confirm-password");

  if (confirmPassword.value == '') {
    showError("confirm-password-missing");
    return false;
  } else if (password.value != confirmPassword.value) {
    showError("password-mismatch");
    return false;
  } else {
    return true;
  }
}

function validateAll() {
  clearAllErrors();
  validateUsername();
  validateEmail();
  validatePhone();
  validateDateOfBirth();
  validatePassword();
  validateConfirmPassword();

  if (
      validateUsername() && validateEmail() &&
      validatePhone() && validateDateOfBirth() && 
      validatePassword() && validateConfirmPassword()
     ) 
  {
    return true;
  } else {
    return false;
  }

}
//END REGISTRATION VALIDATION