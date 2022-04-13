
//function ValidateEmail(EmailAddress)
//var EmailAddress=document.getElementById('Signin');
//alert(EmailAddress);
function ValidateEmail()
{
    
    var EmailAddress=document.forms["Signin"]['EmailName'].value;
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

    
    function ValidatePassword()
    {
        var UserPwd=document.forms["Signin"]['floatingPassword'].value;
         
        if (UserPwd!=""){
            document.getElementById("pwderror").innerHTML="";
            return true;
            }
        else{
            document.getElementById("pwderror").innerHTML="Password Is Wrong Or Empty";
            return false;
        }
    }
   