const form = document.querySelectorAll("[form-send]");

function sendData(body) {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "https://imtimetraveler.com/email_custom/");
  //xhr.open("POST", "./send_email.php");
  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = () => alert(`Mensaje enviado satisfactoriamente!`);
  xhr.send(body);
}

form[0].addEventListener("submit", (event) => {
  event.preventDefault();
  const inputs = event.target;
  const body = `{
    "name": "${inputs[0].value}",
    "email": "${inputs[1].value}",
    "message": "${inputs[2].value}"
  }`;
  sendData(body);
  
});

const iconoMenu = document.getElementById("menu-hamburguesa");

iconoMenu.addEventListener("click", () => {
  console.log(document.getElementById("menu-hamburguesa").classList);
  document.getElementById("menu-hamburguesa").classList.remove("menu-overlay");
});
const menu = document.getElementsByClassName("menu-icon");
menu[0].addEventListener("click", () => {
  console.log("-------------------");
  document.getElementById("menu-hamburguesa").classList.add("menu-overlay");
});
