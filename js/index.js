
var emailinputt =document.getElementById("input1")  ;
 var passwardinputt =document.getElementById("input2") ;
var printt2 = JSON.parse(localStorage.getItem("nname"));
  var bbtn =document.getElementById("btn");

function isLoginEmpty() {

  if (emailinputt.value == "" || passwardinputt.value == "") {
      return false
  } else {
      return true
  }
}
 
 function check(email,pass) {
  for (i = 0; i < printt2.length; i++) {
     
    if (email.toLowerCase()=== printt2[i].email.toLowerCase()&&pass.toLowerCase()=== printt2[i].pass.toLowerCase()) {
   
      return true;
    }
   
  }
   
  return false;
}

function checkInput(){

  if (isLoginEmpty() == false) {
    document.getElementById('error').innerHTML = '<span class="text-danger p-3">All inputs is required</span>'; 
   }
  else if (isLoginEmpty() == true){

  var inputValue = {
    inputEmail:emailinputt.value,
    inputPaas: passwardinputt.value, 
  };
  
     let y = check(inputValue.inputEmail,inputValue.inputPaas );
     if (y == true) {
       document.getElementById('error').innerHTML = '<span class="p-3 text-success">sucsses</span>';
       localStorage.setItem('sessionUsername', printt2[i].name)

 
      window.open("./sucsess.html"," _self");

      } else if (y == false) {
               document.getElementById('error').innerHTML= '<span class="p-3 text-danger">incorrect email or password</span>';

      }
 
    
    


}

}
 bbtn.addEventListener("click",checkInput)

