// Navegación móvil
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Smooth scrolling for navigation links
document.querySelectorAll("a[href^="#"]").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // You can add your form submission logic here (e.g., using Fetch API to send data to a server)
    
    // For demonstration purposes, we'll just show a success message
    const form = event.target;
    const submitButton = form.querySelector(".submit-button");
    
    submitButton.textContent = "Enviando...";
    submitButton.disabled = true;
    
    setTimeout(() => {
        submitButton.textContent = "Mensaje enviado";
        submitButton.style.backgroundColor = "#28a745"; // Green color for success
        
        setTimeout(() => {
            form.reset();
            submitButton.textContent = "Enviar mensaje";
            submitButton.disabled = false;
            submitButton.style.backgroundColor = "var(--accent-color)";
        }, 3000);
    }, 1500);
});

// Scroll animations
const animatedElements = document.querySelectorAll(".fade-in-up");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.1
});

animatedElements.forEach(element => {
    observer.observe(element);
});

