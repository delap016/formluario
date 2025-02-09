const formulario = document.querySelector("#form");
formulario.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  const forma = new FormData(this); // Corrección aquí
  const response = await fetch(this.action, {
    method: this.method,
    body: forma,
    headers: {
      Accept: "application/json",
    },
  });
  if (response.ok) {
    this.reset();
    alert("Gracias por contactarme, te escribiré pronto");
  }
}