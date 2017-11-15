var myImage = document.querySelector('img');
myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/pote-blue.png')
	{
		myImage.setAttribute('src', 'images/pote-red.png');		
	} else{
		myImage.setAttribute('src', 'images/pote-blue.png');				
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'This is Pote, ' + myName + '!';
}

if(!localStorage.getItem('name')) {
	setUserName();
} else{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'This is Pote, ' + storedName + '!';
}

myButton.onclick = function() {
	setUserName();
}