const form = document.querySelectorAll("[form-send]");

form[0].addEventListener("submit", (event) => {
  const inputs = event.target;
  const body = {
    name: inputs[0].value,
    email: inputs[1].value,
    message: inputs[2].value,
  };
  //TODO-CALL-API
  alert(
    `Mensaje enviado satisfactoriamente! Datos ${body.email} : ${body.name} : ${body.message}`
  );
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
