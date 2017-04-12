// function login(showhide) {
// 	if(showhide == "show") {
// 	    document.getElementById('popup-bg').style.visibility="visible";
// 	} else if(showhide == "hide") {
// 	    document.getElementById('popup-bg').style.visibility="hidden"; 
// 	}
// }

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

// START JAROD IS A CUCK
var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');
canvas.style.background = "black";
var gradient = ctx.createLinearGradient(0, 0, 475, 0);
gradient.addColorStop(0, "#175909");
gradient.addColorStop(0.2, "#29701a");
gradient.addColorStop(0.4, "#70ed57");
gradient.addColorStop(0.6, "#0c3304");
gradient.addColorStop(0.8, "#528947");
gradient.addColorStop(1, "green");
ctx.fillStyle = gradient;

var code = [
  'fuck you jarod', 'jarod is a cuck', 'ayy lmao', 'do the css', 'cucklord101', '[CYBER BULLYING]', 'this team...', 'xD', 'die', 'jk', 'dad?', 'jarod is gay', 'josh is the best', 'josh is so cool', 'i love josh', 'josh is good at cs', 'hurry up', 'do the style cunt', 'cunt', 'do it', 'CSS PLS', 'sorry', 'BARBWIRE[TM]', 'spicy', 'spicymemes.com', 'minecraft', 'roblox', 'PUSSY', 'sushi', 'FLIGHT CENTRE', 'neck', 'jarod watches kids', 'STYLE THE FUCKIN INDEX', 'MEME', 'SPICY MEME', 'Hello', 'spicymemes.org is a joke', '13123213', 'fuck hitler jk', 'I AM THE ONE', 'DONT WEIGH A TONNE', 'DONT NEED A GUN', 'TO GET RESPECT', 'UP ON THE STREET', 'JAROD SUCKS', 'CAB230', 'buying gf 40gp', 'fuck dads cummies', 'do the layout', 'just do that jarmad shit layout cunt', 'comic SANS', 'jardo more like loser', 'get cyber bullied kid', 'cyber bullying intensifies', 'let those telemarketers make the website', 'fag', 'frick off kiddo', 'squirt', 'buddy', 'champ', 'chap', 'kiddo', 'kid', 'XD', 'what the frick!!!!!', 'heck off hecker', 'frick you', 'madlad', 'shit', 'well', 'ttttt', 'aaaaaaaa', 'im out of ideas'
];
var tags = [];
var count = 350;

for (var i = 0; i < count; i++) {
  var a = {};
 
  a.code = code[Math.round(Math.random() * code.length)];
  a.x = Math.random() * canvas.width; 
  a.y = Math.random() * canvas.width - canvas.width; 
  a.speed = 7 + Math.random() * 15;
  tags.push(a);
}

setInterval(function() {
	ctx.font = "20px Comic Sans MS";	
 	ctx.clearRect(0, 0, canvas.width, canvas.height);
 	for (var i = 0; i < count; i = i + 1) {
    var a = tags[i];
    ctx.fillText(a.code, a.x, a.y, 80);
    a.y += a.speed; 
    if (a.y > screen.height) a.y = -50; 
  }
}, 100);
// END JAROD IS A CUCK


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
  var dobRegex = /^(0[1-9]|1[012])[-/](0[1-9]|[12][0-9]|3[01])[-/](18|19|20)\d\d[-/]$/g;

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