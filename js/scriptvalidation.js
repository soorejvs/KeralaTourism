
//function ValidateEmail(EmailAddress)
//var EmailAddress=document.getElementById('Signin');
//alert(EmailAddress);
function ValidateEmail()
{
    
    var EmailAddress=document.forms["Signup"]['floatingInput'].value;
     regExp=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    //"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"/;
	//Loop through fields with the class of "req" 
    //console.log(EmailAddress)
	if (regExp.test(EmailAddress)){
        document.getElementById("error").innerHTML="";
        return true;
        }
    else{
        
        document.getElementById("error").innerHTML="Email Format Is Wrong";
        return false;
    }

}
function ValidatePhoneNo()
{
    var PhoneNo=document.forms["Signup"]['floatingPhone'].value;
     regExp=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
     
    if (PhoneNo==""){
        document.getElementById("phoneerror").innerHTML="Please Fill Phone No";
        return false;
    }
	if (regExp.test(PhoneNo)){
        document.getElementById("phoneerror").innerHTML="";
        return true;
        }
    else{
        document.getElementById("phoneerror").innerHTML="Please Fill Phone No";
        return false;
    }
}
    function isNumber(evt) {
        var iKeyCode = (evt.which) ? evt.which : evt.keyCode
        if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
            return false;

        return true;
    }
    function ValidatePassword(UserPassword)
    {
        alert(UserPassword);
         regExp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        if (regExp.test(UserPassword)){
            return true;
            }
        else{
            alert("Password Is Error");
            return false;
        }
    }
    function ValidateName(InputName)
    {
        
        var InputName=document.forms["Signup"]['inputName'].value;
        if (InputName.length>=3){
            return true;
            }
        else{
            alert("Your Name Lenght Must Be Greater Than 3 Chracter");
            return false;
        }
    }