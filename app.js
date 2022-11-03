const nombre = document.getElementById("name");   /*sirve para enlazar lo del formulario*/
const email = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", (e) => { /*aqui srive opara validar lo que el usario ingresara*/
  e.preventDefault();
  let warnings = "";
  let entrar = false;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  parrafo.innerHTML = "";
  if (nombre.value.length < 6) {
    warnings += `El nombre no es valido <br>`;
    entrar = true;
  }
  if (!regexEmail.test(email.value)) {
    warnings += `El email no es valido <br>`;
    entrar = true;
  }
  if (pass.value.length < 8) {
    warnings += `La contraseña no es valida <br>`;
    entrar = true;
  }

  if (entrar) {
    parrafo.innerHTML = warnings;  /*si es correcto los datos ingresados se manda un mensaje de confirmaicon*/
  } else {
    parrafo.innerHTML = "se ha creado la cuenta";
  }
});
