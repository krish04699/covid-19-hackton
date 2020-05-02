function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  $('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })