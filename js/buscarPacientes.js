var botonBuscar = document.querySelector("#buscarPaciente");

botonBuscar.addEventListener("click", () => {
  var xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://alura-es-cursos.github.io/api-pacientes/pacientes.json"
  );
  xhr.addEventListener("load", function () {
    var errorAjax = document.querySelector("#error-ajax");

    if ((xhr, this.status == 200)) {
      errorAjax.classList.add("invisible");
      console.log(xhr.responseText);
      var respuesta = xhr.responseText;
      var pacientes = JSON.parse(respuesta); //aca convertimos la respuesta a un archivo json para oderlo trabajar en js en este caso sera un arreglo de objs
      pacientes.forEach((paciente) => {
        adicionarPacienteEnLaTabla(paciente);
      });
    } else {
      errorAjax.classList.remove("invisible");
      console.log(xhr.status);
      console.log(xhr.responseText);
    }
  });
  xhr.send();
});
