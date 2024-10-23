function sendToWhatsApp() {
  const nombre = document.getElementById("nombre").value;
  const apellidos = document.getElementById("apellidos").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;
  const descripcion = document.getElementById("descripcion").value;

  const mensaje =
    `Nombre: ${nombre}%0A` +
    `Apellidos: ${apellidos}%0A` +
    `Email: ${email}%0A` +
    `Teléfono: ${telefono}%0A` +
    `Descripción: ${descripcion}`;

  const numeroWhatsApp = "5363939196"; // Reemplaza con el número de WhatsApp al que deseas enviar el mensaje
  const url = `https://wa.me/${numeroWhatsApp}?text=${
    "Nombre: " +
    nombre +
    "%0A" +
    "Apellidos: " +
    apellidos +
    "%0A" +
    "Email: " +
    email +
    "%0A" +
    "Telefono: " +
    telefono +
    "%0A" +
    "Descripción: " +
    descripcion
  }`;

  window.open(url, "_blank");
}
