const toggleButton = document.querySelector(".toggle-button")
const box = document.querySelector('.box');

console.log(toggleButton);

toggleButton.addEventListener('click', ()=>{
  box.classList.toggle('active');
})


function validation()
{
    var name = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;
    var errormsg = document.getElementById("errormsg");
    var text;
  
    if (name =="" ){
     window.alert("Please enter your name");
      return false;
    }
    
    if(email ==""){
      window.alert("Please enter your email");
      return false;
    }

}