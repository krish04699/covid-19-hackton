function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function validateForm() {
    var reff = document.forms["myForm"]["reference"].value;
    
    if (reff== "") {
        document.getElementById('ref').innerHTML = " Enter valid reference number"
        
    }
   
}