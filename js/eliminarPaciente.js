// var pacientes = document.querySelectorAll(".paciente"); // selecionamos todos los pacientes de mi index.html
// console.log(pacientes);
var tabla = document.querySelector("#tabla-pacientes"); //selecionamos toda la tabla por su id

// a esa tabla le asignaremos un evento que en este caso sera doble click
tabla.addEventListener("dblclick", (event) => {
  console.log(event.target); // aca mostramos por consola el valor de el evento donde se dio click
  console.log(event.target.parentNode); // aca estamos imprimiendo nuestra etiqueta html padre, de el valor de el evento seleccionado
  event.target.parentNode.classList.add("desvanecido");
  setTimeout(() => {
    event.target.parentNode.remove(); // aca estamos eliminado la etiqueta padre de el valor seleccionado
  }, 300);
});
