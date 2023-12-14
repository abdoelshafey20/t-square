function validate(){
    var user=document.getElementById("user").value ;
    var email=document.getElementById("email").value ;
    var password=document.getElementById("pass").value ;
    var confirmpass=document.getElementById("confirm").value ;
    var result=document.getElementById("result") ;

        // Result style
        result.setAttribute("class","text-center alert alert-danger p-1" );

        result.style.transition="all .5s linear";

        // Result style

        if(user=="" && email=="" && password =="" && confirmpass =="") {   
        result.innerHTML="*Enter Data In Form";
        return false;
    }
    else if(user.length<5 || user.length>15){
    result.innerHTML="*Enter 5-15 char in user name ";
    return false;}

    else if(email.indexOf('@')==-1){
    result.innerHTML="*Enter Valid Email ";
    return false;
    }

    else if(password.length <8){
        result.innerHTML="*Enter  Atleast 8 char in pass ";
        return false;}

        else if(password != confirmpass ){
            result.innerHTML="*Matching Password";
            return false;
    }
    else {
        return true;
    }
}