function getFormvalue() {
    //Write your code here

	event.preventDefault();

	var firstName = document.forms[form1][fname].value;
	var lastName = document.froms[form1][lname].value;

	var message = `${firstName} ${lastName}`
	alert(message);
	

}
