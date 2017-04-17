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

    document.getElementById('sample-result').style.display = "block";

    //Show selected data
    for (var i = 0; i < 192; i++) {
      var suburbCheck = document.getElementById('result-suburb' + i.toString());
      if (selectedSuburb.innerHTML == suburbCheck.innerHTML) {
        document.getElementById(i).style.display = "block";
      }
    }
}
//END SEARCH


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