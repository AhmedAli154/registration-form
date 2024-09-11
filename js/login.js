var nameInput = document.getElementById("nainput");
var emailInput = document.getElementById("eminput");
var passInput = document.getElementById("painput");
var bbtnn= document.getElementById("btn2")

function isLoginEmpty() {
  if (emailInput.value == "" || passInput.value == ""||nameInput.value=="") {
      return false
  } else {
      return true
  }
}

if(localStorage.getItem("nname") !=null){
  add = JSON.parse(localStorage.getItem("nname"));
   
  }else{
    var add = [];

  }
 
function check(email) {
  for (i = 0; i < add.length; i++) {
     
    if (email === add[i].email) {
   
      return 9;
    }
   
  }
   
  return 5;
}

function AddBookmark() {

if( isLoginEmpty()==false ){
  document.getElementById('error2').innerHTML = '<span class="text-danger p-3">All inputs is required</span>'; 

}else if(isLoginEmpty()==true){

 var account = {
    name: nameInput.value,
    email: emailInput.value,
    pass: passInput.value,
  };
  var printt = JSON.parse(localStorage.getItem("nname"));
  let x = check(account.email);
  if (x == 9) {
    window.alert("unvilable email");
   } else if (x == 5) {
    window.alert("avilable email");
    add.push(account);
  
    localStorage.setItem("nname", JSON.stringify(add));
   } else {
    console.log(x);
  }

}

}

bbtnn.addEventListener("click",AddBookmark)

