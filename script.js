function validEmail(str) {
  //your JS code here.
 const emailPattern = /^(?!.*[.-]{2})[\w.-]+@[a-zA-Z_]+(?:\.[a-zA-Z]{2,3})+$/;
    return emailPattern.test(email);
	
	
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
