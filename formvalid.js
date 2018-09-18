var d = new Date();
document.getElementById("demo").innerHTML = d;

function validate(){
    var uname = document.getElementById('uname');
    var username = document.getElementById('username');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var c_password = document.getElementById('c_password');

    if (uname.value.length == 0) {
        document.getElementById('head').innerText = "* All fields are mandatory *"; // This segment displays the validation rule for all fields
        uname.focus();
        return false;
        }
    if (inputAlphabet(uname, "* For your name please use alphabets only *")) {
        if (inputAlphabetUsername(username, "* For your username please use alphabets only *")) {
            if (lengthDefine(password,  6, 20)) {
                if (lengthDefinec_passowrd(c_password,  6, 20)) {
                if (emailValidation(email, "* Please enter a valid email address *")) {
                    return true;
                }
                }
             }
        }
    }
    return false
}


    // Function that checks whether input text is an alphabetic character or not.
    function inputAlphabet(inputtext, alertMsg) {
    var alphaExp = /^[a-zA-Z]+$/;
    if (inputtext.value.match(alphaExp)) {
    return true;
    } else {
    document.getElementById('uname_error').innerText = alertMsg; // This segment displays the validation rule for name.
    //alert(alertMsg);
    inputtext.focus();
    return false;
    }
    }
    
// Function that checks whether input text is an alphabetic character or not.
function inputAlphabetUsername(inputtext, alertMsg) {
    var alphaExp = /^[a-zA-Z]+$/;
    if (inputtext.value.match(alphaExp)) {
    return true;
    } else {
    document.getElementById('username_error').innerText = alertMsg; // This segment displays the validation rule for name.
    //alert(alertMsg);
    inputtext.focus();
    return false;
    }
    }

    // Function that checks whether an user entered valid email address or not and displays alert message on wrong email address format.
function emailValidation(inputtext, alertMsg) {
    var emailExp = /^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
    if (inputtext.value.match(emailExp)) {
    return true;
    } else {
    document.getElementById('email_error').innerText = alertMsg; // This segment displays the validation rule for email.
    inputtext.focus();
    return false;
    }
    }

    // Function that checks whether the input characters are restricted according to defined by user.
function lengthDefine(inputtext, min, max) {
    var uInput = inputtext.value;
    if (uInput.length >= min && uInput.length <= max) {
    return true;
    } else {
    document.getElementById('password_error').innerText = "* Please enter between " + min + " and " + max + " characters *"; // This segment displays the validation rule for username
    inputtext.focus();
    return false;
    }
    }

    function lengthDefinec_passowrd(inputtext, min, max) {
        var uInput = inputtext.value;
        if (uInput.length >= min && uInput.length <= max) {
        return true;
        } else {
        document.getElementById('c_password_error').innerText = "* Please enter between " + min + " and " + max + " characters *"; // This segment displays the validation rule for username
        inputtext.focus();
        return false;
        }
        }
    