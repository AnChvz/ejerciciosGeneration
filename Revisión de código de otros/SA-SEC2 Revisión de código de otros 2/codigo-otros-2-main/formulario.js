// Selección del formulario por su ID
var formulario = document.querySelector("#form")

// Corrección: Cambiado "onsubmit" a "submit"
formulario.addEventListener("submit", function(e) {
  // Corrección: Uso de preventDefault() en lugar de prevent()
  e.preventDefault();
  
  // Corrección: Renombrar las variables para evitar conflicto de nombres
  var nombreInput = formulario.elements.name;
  var edadInput = formulario.elements.age;
  var nacionalidadSelect = formulario.elements.nationality;

  var nombre = nombreInput.value;
  var edad = parseInt(edadInput.value); // Convertir a número entero

  var i = nacionalidadSelect.selectedIndex;
  var nacionalidad = nacionalidadSelect.options[i].value;
  
  // Corrección: Eliminación de console.logs
  // Validación de nombre y edad
  if (nombre.length === 0) {
    nombreInput.classList.add("error");
  }
  if (isNaN(edad) || edad < 18 || edad > 120) {
    edadInput.classList.add("error");
  }

  // Si los campos son válidos, llamar a la función agregarInvitado
  if (nombre.length > 0 && !isNaN(edad) && edad >= 18 && edad <= 120) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
});

// Creación de botón para borrar invitado
var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

// Función para agregar invitado a la lista
function agregarInvitado(nombre, edad, nacionalidad) {
  // Mapeo de códigos de nacionalidad a nombres
  var nacionalidadNombre = "";
  switch (nacionalidad) {
    case "ar":
      nacionalidadNombre = "Argentina";
      break;
    case "mx":
      nacionalidadNombre = "Mexicana";
      break;
    case "per":
      nacionalidadNombre = "Peruana";
      break;
    case "vnzl":
      nacionalidadNombre = "Venezolana";
      break;
    default:
      nacionalidadNombre = "Desconocida";
  }

  // Creación de elementos para la lista de invitados
  var lista = document.getElementById("lista-de-invitados");

  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  // Función para crear un par de etiquetas (nombre: valor)
  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span");
    var inputNombre = document.createElement("input");
    var espacio = document.createElement("br");
    spanNombre.textContent = descripcion + ": ";
    inputNombre.value = valor;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }

  // Crear elementos para nombre, edad y nacionalidad
  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidadNombre);

  // Botón para eliminar invitado
  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  // Función para eliminar invitado al hacer clic en el botón
  botonBorrar.onclick = function() {
    elementoLista.remove();
  };
}
