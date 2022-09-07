function calcularIMC(peso, altura) {
  var imc = peso / (altura * altura);
  return imc.toFixed(2);
}
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];
  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;
  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;
  var tdIMC = paciente.querySelector(".info-imc");
  // console.log(imc)

  pesoValido = validarPeso(peso);
  alturaValida = validarAltura(altura);

  if (!pesoValido) {
    console.log("peso incorrecto");
    tdPeso.textContent = "Peso incorrecto";
    tdIMC.textContent = "validar datos";
    pesoValido = false;
    paciente.classList.add("paciente-incorrecto");
  }
  if (!alturaValida) {
    console.log("altura incorrecta");
    tdIMC.textContent = "validar datos";
    tdAltura.textContent = "Altura incorrecta";
    alturaValida = false;
    paciente.classList.add("paciente-incorrecto");
  }
  if (pesoValido && alturaValida) {
    tdIMC.textContent = calcularIMC(peso, altura);
  }
}

function validarPeso(peso) {
  if (peso >= 0 && peso < 1000) {
    return true;
  } else {
    return false;
  }
}

function validarAltura(altura) {
  if (altura >= 0 && altura < 2.5) {
    return true;
  } else {
    return false;
  }
}
