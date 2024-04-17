document.getElementById("myForm").addEventListener("submit");
  var fName = document.getElementById("fname").value;
  var lName = document.getElementById("lname").value;
  var comment = document.getElementById("comment").value;

  document.getElementById("fnameoutput").textContent = "First Name: " + fName;
  document.getElementById("lnameoutput").textContent = "Last Name: " + lName;
  document.getElementById("commentoutput").textContent = "Comment: " + comment;
