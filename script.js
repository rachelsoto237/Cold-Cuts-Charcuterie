const orderForm = document.querySelector("#orderForm");
const formNote = document.querySelector("#formNote");

orderForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(orderForm);
  const message = [
    "Hola, quiero hacer una reservacion en Charcuterie Cold Cuts.",
    "",
    `Nombre: ${data.get("nombre") || ""}`,
    `Servicio: ${data.get("tabla") || ""}`,
    `Fecha: ${data.get("fecha") || ""}`,
    `Telefono: ${data.get("telefono") || ""}`,
    `Cantidad de personas: ${data.get("personas") || ""}`,
    `Seleccion de productos: ${data.get("mensaje") || ""}`,
  ].join("\n");

  const whatsappUrl = `https://wa.me/17876175175?text=${encodeURIComponent(message)}`;

  formNote.textContent =
    "Se abrira WhatsApp con tu reservacion lista para enviar. Si no abre, escribenos a coldcutscharcuteria@gmail.com.";
  window.open(whatsappUrl, "_blank", "noopener");
});
