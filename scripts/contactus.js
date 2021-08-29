//Api Link
const usersApi = "https://afternoon-falls-30227.herokuapp.com/api/v1/contact_us";

// select Form
const contactForm = document.getElementById("contactForm");

// add submit Event listener
contactForm.addEventListener("submit", (event) => {
  // prevent default
  event.preventDefault();
  // Get form data
  const firstName = document.getElementById("fname").value;
  const emailElement = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  
    const data = {
    name: firstName,
    email: emailElement,
    subject:subject,
    message:message
  };
  const xhr = new XMLHttpRequest();
  xhr.open("POST", usersApi);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(data));
  xhr.onload = function () {
    console.log(xhr.status);
    //to reset Form after send
    if (xhr.status == 200) {
      contactForm.reset();
    }
  }; 
});

function onLoadCartNumbers(){
  let productNumbers = localStorage.getItem('cartNumbers');
  if(productNumbers){
    document.querySelector('.element span').textContent=productNumbers;

  }
}
//to load number of items in cart
onLoadCartNumbers();