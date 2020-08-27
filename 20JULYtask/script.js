/* LAB 8 - SHIPPING FORM */
//Order Shipping object
var shipInfo = {
	cid: 0,
	name: "",
	pc: "",
	speed: "",
	cost: 0
};
window.onload = function() {
	var formHandle = document.forms.form_ship;
	formHandle.onsubmit = processForm ;
	function processForm() {
		var thankYou = document.getElementById("thanks_msg");
		var nameValue = formHandle.f_Name;
		var customerIdValue = formHandle.f_Id;
		var postalCodeValue = formHandle.f_pc;
		var thanksCustomer = document.getElementById("thanksCustomer");
		var thanksPc = document.getElementById("thanksPC");
		var inputName = document.getElementById("in_Name");
		var inputCustomer = document.getElementById("in_Id");
		var inputPostal = document.getElementById("in_pc");	
		var regexId = /^\d{6}$/;
		var regexPc = /^([a-z]\d){3}$/i;
		
		if (nameValue.value === "" || nameValue.value === null) {
			inputName.style.background = "red";
			
			nameValue.focus();
			return false;
		}
		else {
			inputName.style.background = "white";
		}
		
		if (!regexId.test(customerIdValue.value)) {
			inputCustomer.style.background = "red";
			
			customerIdValue.focus();
			return false;
		}
		else {
			inputCustomer.style.background = "white";
		}
		if (!regexPc.test(postalCodeValue.value)) {
			inputPostal.style.background = "red";
			
			postalCodeValue.focus();
			return false;
		}
		else {
			inputPostal.style.background = "white";
		}
		
		formHandle.style.display = "none";
		thankYou.style.display = "inline";
		
		thanksCustomer.innerHTML = nameValue.value + " (customer # " + customerIdValue.value + ")";
		thanksPc.innerHTML = postalCodeValue.value;
 		
		return false;
	}
}