function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


function validateForm() {
    var id = document.forms["myForm"]["uid"].value;
    var pas = document.forms["myForm"]["pass"].value;
    if(id=="a"&&pas=="a")
    {
      
      document.getElementById("nxt")="operatordashboard.html";
    }
    if (id== "") {
        document.getElementById('user').innerHTML = " Enter valid User id "
        
      
    }
      if (pas== "") {
        document.getElementById('ppas').innerHTML = " Enter valid Password "
       
        
    }
}