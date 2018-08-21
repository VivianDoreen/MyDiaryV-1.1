 //Getting all input text objects
 var std_id = document.forms["add_fees"]["std_id"];
 var fees_paid = document.forms["add_fees"]["fees_paid"];

 //Getting all error_display messages
 var std_id_error = document.getElementById('std_id_error');
 var fees_paid_error = document.getElementById('fees_paid_error');

 //Setting all eventListners
 std_id.addEventListener("blur", std_idVerify, true);
 fees_paid.addEventListener("blur", fees_paidVerify, true);
 
 //Validation function
 function validate(){
   //Student Id Validation
   if (std_id.value == "") {
     std_id.style.border = "1px solid red";
     std_id_error.textContent = "Student Id is required here";
     std_id.focus();
     return false;
   }
   if (fees_paid.value == "") {
     fees_paid.style.border = "1px solid red";
     fees_paid_error.textContent = "Student Id is required here";
     fees_paid.focus();
     return false;
   }
 }

 //Eventhandler functions
 function std_idVerify(){
   if (std_id.value !="") {
     std_id.style.border = "1px solid #7c7575";
     std_id_error.innerHTML = "";
     return true;
   }
 }
 
 function fees_paidVerify(){
   if (std_id.value !="") {
     fees_paid.style.border = "1px solid #7c7575";
     fees_paid_error.innerHTML = "";
     return true;
   }
 }