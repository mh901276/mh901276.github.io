document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();


  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;

  if (name === "" || email === "" || subject === "") {
    alert("Please fill out all fields.");
    return;
  }


  alert("Form submitted successfully!");
});




