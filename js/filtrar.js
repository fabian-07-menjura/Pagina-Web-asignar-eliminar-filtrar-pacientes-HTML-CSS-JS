var campoFiltro = document.querySelector("#filtrar-tabla"); //campuramos el input para filtrar

campoFiltro.addEventListener("input", function () {
  //pasamos un evento escuchador tipo input
  //   console.log(this.value);
  var valueInput = this.value;
  //   console.log(nombrecito); // mostramos por consola el valor de dicho evento (input)
  var pacientes = document.querySelectorAll(".paciente"); //recordemos que esto nos devuelve un arreglo con todos las etiquetas que tengan la misma clase
  //iteramos sobre el arreglo pacientes

  if (this.value.length > 0) {
    for (let i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      var tdNombre = paciente.querySelector(".info-nombre");
      var nombre = tdNombre.outerText;
      var expresion = new RegExp(this.value, "i"); //la i esta atenta a las expresiones de this.value no teniendo en cuenta mayusculas

      //validamos si nombre tiene alguna expresion de las que vamos colocando en el input
      if (!expresion.test(nombre)) {
        paciente.classList.add("invisible");
      } else {
        paciente.classList.remove("invisible");
      }
    }
  } else {
    for (let i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      paciente.classList.remove("invisible");
    }
  }
});

// var nombre = document.querySelector(".pablito").outerText;
// console.log(nombre == "Pablo");

// console.log(nombre === "Pablo");
