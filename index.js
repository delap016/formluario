let currentStep = 0;
const formSteps = document.querySelectorAll('.form-step');
const stepDots = document.querySelectorAll('.step-dot');

function updateProgressDots() {
    stepDots.forEach((dot, index) => {
        dot.classList.toggle('active', index <= currentStep);
    });
}

function nextStep() {
    if (currentStep < formSteps.length - 1) {
        formSteps[currentStep].classList.remove('active');
        currentStep++;
        formSteps[currentStep].classList.add('active');
        updateProgressDots();
    }
}

function prevStep() {
    if (currentStep > 0) {
        formSteps[currentStep].classList.remove('active');
        currentStep--;
        formSteps[currentStep].classList.add('active');
        updateProgressDots();
    }
}

const formulario = document.querySelector("#multiStepForm");
formulario.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();
    
    const forma = new FormData(this);
    
    try {
        const response = await fetch(this.action, {
            method: this.method,
            body: forma,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            this.style.display = "none";
            const successMessage = document.getElementById("successMessage");
            successMessage.style.display = "block";
            successMessage.scrollIntoView({ behavior: 'smooth' });
        } else {
            throw new Error('Network response was not ok.');
        }
    } catch (error) {
        const errorMessage = document.createElement("div");
        errorMessage.classList.add("alert", "alert-danger");
        errorMessage.textContent = "Hubo un problema al enviar el formulario. Por favor, intenta nuevamente.";
        this.insertAdjacentElement('afterend', errorMessage);
    }
}
