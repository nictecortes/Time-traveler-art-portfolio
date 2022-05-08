

const form = document.querySelectorAll("[form-send]");

form[0].addEventListener("submit", (event) => {
  const inputs = event.target;
  const body = {
    name: inputs[0].value,
    email: inputs[1].value,
    message: inputs[2].value
  }
  //TODO-CALL-API
  alert(`Mensaje enviado satisfactoriamente! Datos ${body.email} : ${body.name} : ${body.message}`);
});