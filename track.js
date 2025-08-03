document.addEventListener("DOMContentLoaded", function () {
  const promociones = document.querySelectorAll(".card-promocion");

  promociones.forEach((card) => {
    card.addEventListener("click", () => {
      const nombreCliente = card.getAttribute("data-cliente") || "desconocido";
      const nombrePromo = card.getAttribute("data-promocion") || "sin_nombre";

      fetch("https://tracking-server-dus4.onrender.com/track", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          cliente: nombreCliente,
          promocion: nombrePromo,
          timestamp: new Date().toISOString()
        })
      }).catch((error) => {
        console.error("Error al enviar datos de rastreo:", error);
      });
    });
  });
});
