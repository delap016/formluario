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
