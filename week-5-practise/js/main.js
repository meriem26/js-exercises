function colourChanging() {
  var Jumbotron = document.querySelector(".jumbotron");
  Jumbotron.style.backgroundColor = "#588fbd";
  var DonateBike = document.querySelector(".btn-primary.btn-lrg");
  DonateBike.style.backgroundColor = "#ffa500";
  var VolunteerBtn = document.querySelector(".btn-secondary.btn-lrg");
  VolunteerBtn.style.backgroundColor = "black";
  VolunteerBtn.style.color = "white";
}
var BlueBtn = document.querySelector("#blueBtn");
BlueBtn.addEventListener("click", colourChanging);

function orangeChanging() {
  var Jumbotron = document.querySelector(".jumbotron");
  Jumbotron.style.backgroundColor = "#f0ad4e";
  var DonateBike = document.querySelector(".btn-primary.btn-lrg");
  DonateBike.style.backgroundColor = "#5751fd";
  var VolunteerBtn = document.querySelector(".btn-secondary.btn-lrg");
  VolunteerBtn.style.backgroundColor = "#31b0d5";
  VolunteerBtn.style.color = "white";
}
var OrangeBtn = document.querySelector("#orangeBtn");
OrangeBtn.addEventListener("click", orangeChanging);

function greenChanging() {
  var Jumbotron = document.querySelector(".jumbotron");
  Jumbotron.style.backgroundColor = "#87ca8a";
  var DonateBike = document.querySelector(".btn-primary.btn-lrg");
  DonateBike.style.backgroundColor = "black";
  var VolunteerBtn = document.querySelector(".btn-secondary.btn-lrg");
  VolunteerBtn.style.backgroundColor = "#8c9c08";
}
var OrangeBtn = document.querySelector("#greenBtn");
OrangeBtn.addEventListener("click", greenChanging);

function checkFields(event) {
  event.preventDefault();

  function emailCheck() {
    return email.value.includes("@");
  }
  var email = document.querySelector("#exampleInputEmail1");
  var name = document.querySelector("#example-text-input");
  var description = document.querySelector("#exampleTextarea");
  var listOfInputs = [email, name, description];

  if (
    emailCheck() == false ||
    name.value.length == 0 ||
    description.value.length == 0 ||
    email.value.length == 0
  ) {
    return listOfInputs.forEach(
      element => (element.style.backgroundColor = "red")
    );
  } else {
    alert(
      "Thank you for filling out the form",
      listOfInputs.map(element => (element.value = ""))
    );
  }
}

var submit = document.querySelector("#submitBtn");
submit.addEventListener("click", checkFields);
