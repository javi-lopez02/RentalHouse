// Obtener los datos del almacenamiento local
var data = localStorage.getItem("contactDescription");

// Insertar los datos en el input de descripción
var descriptionInput = document.getElementById("descripcion");
if (data) {
    var dataArray = data.split(/\r?\n/); // Dividir los datos por líneas
    descriptionInput.value = dataArray.join(", "); // Unir las líneas con comas
}
localStorage.clear();