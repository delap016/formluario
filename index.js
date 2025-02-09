let currentStep = 0;
const formSteps = document.querySelectorAll('.form-step');

// Mostrar el siguiente paso
function nextStep() {
  if (currentStep < formSteps.length - 1) {
    formSteps[currentStep].classList.remove('active');
    currentStep++;
    formSteps[currentStep].classList.add('active');
  }
}

// Mostrar el paso anterior
function prevStep() {
  if (currentStep > 0) {
    formSteps[currentStep].classList.remove('active');
    currentStep--;
    formSteps[currentStep].classList.add('active');
  }
}

const formulario = document.querySelector("#multiStepForm");
formulario.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  
  const forma = new FormData(this); // Usamos "this" para referirnos al formulario.
  
  // Enviamos el formulario a Formspree
  const response = await fetch(this.action, {
    method: this.method,
    body: forma,
    headers: {
      Accept: "application/json",
    },
  });
  
  // Si la respuesta es exitosa, mostramos el mensaje y ocultamos el formulario
  if (response.ok) {
    this.style.display = "none"; // Ocultamos el formulario
    const mensajeGracias = document.createElement("div");
    mensajeGracias.classList.add("alert", "alert-success");
    mensajeGracias.textContent = "¡Gracias por contactarme, te escribiré pronto!";
    document.body.appendChild(mensajeGracias); // Mostramos el mensaje de agradecimiento
  } else {
    // Si hay un error en el envío del formulario
    const mensajeError = document.createElement("div");
    mensajeError.classList.add("alert", "alert-danger");
    mensajeError.textContent = "Hubo un problema al enviar el formulario. Intenta nuevamente.";
    document.body.appendChild(mensajeError); // Mostramos el mensaje de error
  }
}


