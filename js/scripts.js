// function login(showhide) {
// 	if(showhide == "show") {
// 	    document.getElementById('popup-bg').style.visibility="visible";
// 	} else if(showhide == "hide") {
// 	    document.getElementById('popup-bg').style.visibility="hidden"; 
// 	}
// }

//Function To Display Popup
function div_show() {
document.getElementById('popup').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('popup').style.display = "none";
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
  'fuck you jarod', 'jarod is a cuck', 'ayy lmao', 'do the css', 'cucklord101', '[CYBER BULLYING]', 'this team...', 'xD', 'die', 'jk', 'dad?', 'jarod is gay', 'josh is the best', 'josh is so cool', 'i love josh', 'josh is good at cs', 'hurry up', 'do the style cunt', 'cunt', 'do it', 'CSS PLS', 'sorry', 'BARBWIRE[TM]', 'spicy', 'spicymemes.com', 'minecraft', 'roblox', 'PUSSY', 'sushi', 'FLIGHT CENTRE', 'neck', 'jarod watches kids', 'STYLE THE FUCKIN INDEX', 'MEME', 'SPICY MEME', 'Hello', 'spicymemes.org is a joke', '13123213', 'fuck hitler jk', 'I AM THE ONE', 'DONT WEIGH A TONNE', 'DONT NEED A GUN', 'TO GET RESPECT', 'UP ON THE STREET', 'JAROD SUCKS', 'CAB230'
];
var tags = [];
var count = 300;

for (var i = 0; i < count; i++) {
  var a = {};
 
  a.code = code[Math.round(Math.random() * code.length)];
  a.x = Math.random() * canvas.width; 
  a.y = Math.random() * canvas.width - canvas.width; 
  a.speed = 3 + Math.random() * 5;
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
function checkName() {
	var surname = document.getElementById('username');
	if (surname.value == '') {
		document.getElementById("usernameMissing").style.visibility = "visible";
		return false;
	} else {
		return true;
	}
}

function validate() {
	return checkName();
}
//END REGISTRATION VALIDATION