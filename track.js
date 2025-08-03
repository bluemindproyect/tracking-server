document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".promo-card").forEach(card => {
    card.addEventListener("click", () => {
      fetch("https://<TU_DOMINIO_RENDER>.onrender.com/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          promo_id: card.dataset.id || "desconocido",
          client: window.location.hostname
        })
      });
    });
  });
});
