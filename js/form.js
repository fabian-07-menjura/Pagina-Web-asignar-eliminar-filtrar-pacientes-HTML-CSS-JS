var botonAdicionar = document.querySelector("#adicionar-paciente");
botonAdicionar.addEventListener("click", function () {
  event.preventDefault();

  var form = document.querySelector("#form-adicionar");

  var paciente = capturarDatosPaciente(form);

  var error = validarPaciente(paciente);

  if (error) {
    var span = document.querySelector("#mensaje-error");
    span.textContent = error;
    return;
  }
  document.querySelector("#mensaje-error").textContent = "";
  form.reset(); // de  esta forma  reseteamos los inputs de un formulario
});

// ----------------------------------------------------------

function adicionarPacienteEnLaTabla(paciente) {
  var pacienteTr = construitTr(paciente);
  var tabla = document.querySelector("#tabla-pacientes");
  tabla.appendChild(pacienteTr);
}

// -------------------------------------------------------

//la siguiente funcion nos creara un paciente, que sera toda la inf de los inputs
function capturarDatosPaciente(form) {
  //capturando los datos de el formulario
  var paciente = {
    nombre: form.nombre.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calcularIMC(form.peso.value, form.altura.value),
  };
  console.log(paciente);
  return paciente;
}

// ------------------------------------------------------------

function construitTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  //asignacion al tr de los td y a la tabla el tr
  pacienteTr.appendChild(construirTd(paciente.nombre, "info-nombre"));
  pacienteTr.appendChild(construirTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(construirTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(construirTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(construirTd(paciente.imc, "info-imc"));

  console.log(pacienteTr);
  return pacienteTr;
}

// -------------------------------------------------------------

function construirTd(dato, clase) {
  var td = document.createElement("td");
  td.classList.add(clase);
  td.textContent = dato;
  return td;
}

// -------------------------------------------------------------

function validarPaciente(paciente) {
  if (!paciente.nombre) {
    return "insertar nombre de paciente";
  }
  if (!paciente.peso) {
    return "Peso no puede estar vacio";
  }

  if (!validarPeso(paciente.peso)) {
    return "El peso es incorrecto";
  }
  if (!paciente.altura) {
    return "Altura no puede estar vacio";
  }
  if (!validarAltura(paciente.altura)) {
    return "La altura es incorrecta";
  }
  if (!paciente.gordura) {
    return "insertar porcentage de gordura";
  }
  // return;
}
