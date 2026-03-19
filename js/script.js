
  const body = document.body;

  if (body.style.background === "black") {
    body.style.background = "#f4f6f9";
    body.style.color = "#333";
  } else {
    body.style.background = "black";
    body.style.color = "white";
  }
}
function toggleMenu(){
const menu = document.getElementById("mobileMenu");
menu.classList.toggle("active");
}
function sendBookingToWhatsApp() {

var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;
var device = document.getElementById("device").value;
var brand = document.getElementById("brand").value;
var service = document.getElementById("service").value;
var location = document.getElementById("location").value;
var slot = document.getElementById("slot").value;
var problem = document.getElementById("problem").value;

var message = "Hello FixMe Solutions, I want to book a repair service.%0A%0A"
+ "Name: " + name + "%0A"
+ "Phone: " + phone + "%0
