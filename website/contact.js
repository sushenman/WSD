function  validation(){
    var name = document.forms["myform"]["Name"];
    
    var email = document.forms["myform"]["Email"];

if(name.value=""){
    window.alert("Please enter your name");
    name.focus();
    return false;
}
if(email.value=""){
    window.alert("Please enter your email");
    name.focus();
    return false;
}
return true;
}