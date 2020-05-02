function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function addperson(persondetail) {

    var table = document.getElementById(persondetail);

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    var colCount = table.rows[0].cells.length;

    for(var i=0; i<colCount; i++) {

        var newcell	= row.insertCell(i);

        newcell.innerHTML = table.rows[0].cells[i].innerHTML;
        //alert(newcell.childNodes);
        switch(newcell.childNodes[0].type) {
          
            case "checkbox":
                    newcell.childNodes[0].checked = false;
                    break;
                    case "text":
                        newcell.childNodes[0].value = "";
                        break;
            case "select-one":
                    newcell.childNodes[0].selectedIndex = 0;
                    break;
            case "number":
                    newcell.childNodes[0].value = "";
                    break;
            case "number":
                    newcell.childNodes[0].value = "";
                    break;
            case "number":
                    newcell.childNodes[0].value = "";
                    break;

        }
    }
}

function deleteperson(persondetail) {
    try {
    var table = document.getElementById(persondetail);
    var rowCount = table.rows.length;

    for(var i=0; i<rowCount; i++) {
        var row = table.rows[i];
        var chkbox = row.cells[0].childNodes[0];
        if(null != chkbox && true == chkbox.checked) {
            if(rowCount <= 1) {
                alert("Cannot delete all the rows.");
                break;
            }
            table.deleteRow(i);
            rowCount--;
            i--;
        }


    }
    }catch(e) {
        alert(e);
    }
}



function validateForm() {
    var from = document.forms["myForm"]["fplace"].value;
    var to = document.forms["myForm"]["tplace"].value;
    var pur = document.forms["myForm"]["purpose"].value;
    var vnum = document.forms["myForm"]["vnumber"].value;
    var vnam = document.forms["myForm"]["vname"].value;
    var person = document.forms["myForm"]["nperson"].value;
    var pname = document.forms["myForm"]["pname"].value;
    var age1 = document.forms["myForm"]["age"].value;
    var aadharr = document.forms["myForm"]["aadhar"].value;
    var phone = document.forms["myForm"]["phn"].value;

    if (from== "") {
        document.getElementById('ffplace').innerHTML = " Enter valid location "
        
      
    }
      if (to== "") {
        document.getElementById('ttplace').innerHTML = " Enter valid To location "
       
        
    }
    if (pur== "") {
        document.getElementById('ppurpose').innerHTML = " Enter valid purpose "
       
        
    }
    if (vnum== "") {
        document.getElementById('vvnumber').innerHTML = " Enter valid Vehicle Number "
       
        
    }
    if (vnam== "") {
        document.getElementById('vvname').innerHTML = " Enter valid Vehicle Name "
       
        
    }
    if (person== "") {
        document.getElementById('nnperson').innerHTML = " Enter valid Number "
       
        
    }

    if (pname== "") {
        document.getElementById('ppname').innerHTML = " Enter valid Name "
       
        
    }

    if (age1== "") {
        document.getElementById('aage').innerHTML = " Enter age "
       
        
    }
    if (aadharr== "") {
        document.getElementById('adh').innerHTML = " Enter valid Aadhar Number "
       
        
    }
    if (phone== "") {
        document.getElementById('pphn').innerHTML = " Enter valid Phone Number "
       
        
    }
    else
    {
        return false;
    }
    return true;

}