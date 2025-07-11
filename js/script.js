/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 50,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: true
});

sr.reveal('.home__data, .home__social, .home__scroll', {delay: 400})
sr.reveal('.home__image', {delay: 600, origin: 'bottom'})
sr.reveal('.about__data', {delay: 400})
sr.reveal('.skills__card', {interval: 100})
sr.reveal('.projects__card', {interval: 100})
sr.reveal('.contact__card', {interval: 100})
sr.reveal('.contact__form', {delay: 400, origin: 'left'})
sr.reveal('.footer__content', {delay: 400})

/*=============== CONTACT FORM ===============*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()
    
    // Check if the field has a value
    if(contactName.value === '' || contactEmail.value === '' || contactMessage.value === ''){
        // Add and remove color
        contactForm.classList.remove('color-green')
        contactForm.classList.add('color-red')
        
        // Show message
        showMessage('Por favor, completa todos los campos 📝', 'error')
    } else {
        // Show success message
        showMessage('¡Mensaje enviado exitosamente! ✅', 'success')
        
        // Add color during 3 seconds
        contactForm.classList.add('color-green')
        
        // Remove message after 3 seconds
        setTimeout(() => {
            contactForm.classList.remove('color-green')
        }, 3000)
        
        // Clear form fields
        contactName.value = ''
        contactEmail.value = ''
        contactMessage.value = ''
    }
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW MESSAGE ===============*/
function showMessage(message, type) {
    // Remove existing messages
    const existingMessage = document.querySelector('.contact-message')
    if(existingMessage) {
        existingMessage.remove()
    }
    
    // Create message element
    const messageElement = document.createElement('div')
    messageElement.classList.add('contact-message', `contact-message--${type}`)
    messageElement.textContent = message
    
    // Add styles
    messageElement.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        color: white;
        font-weight: 500;
        z-index: 1000;
        animation: slideInRight 0.3s ease-out;
        ${type === 'success' ? 'background-color: #10b981;' : 'background-color: #ef4444;'}
    `
    
    // Add to body
    document.body.appendChild(messageElement)
    
    // Remove after 5 seconds
    setTimeout(() => {
        messageElement.style.animation = 'slideOutRight 0.3s ease-out'
        setTimeout(() => {
            if(messageElement.parentNode) {
                messageElement.remove()
            }
        }, 300)
    }, 5000)
}

/*=============== DOWNLOAD CV ===============*/
const downloadCV = document.getElementById('download-cv')

downloadCV.addEventListener('click', (e) => {
    e.preventDefault()
    showMessage('Función de descarga de CV próximamente disponible 📄', 'info')
})

/*=============== SMOOTH SCROLLING ===============*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/*=============== TYPING ANIMATION ===============*/
const typingText = document.querySelector('.home__description-highlight')
if (typingText) {
    const texts = ['Inteligencia Artificial', 'Automatización B2B', 'Desarrollo de Software', 'Consultoría Estratégica']
    let textIndex = 0
    let charIndex = 0
    let isDeleting = false
    
    function typeWriter() {
        const currentText = texts[textIndex]
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1)
            charIndex--
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1)
            charIndex++
        }
        
        let typeSpeed = isDeleting ? 50 : 100
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000
            isDeleting = true
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false
            textIndex = (textIndex + 1) % texts.length
        }
        
        setTimeout(typeWriter, typeSpeed)
    }
    
    // Start typing animation after page load
    setTimeout(typeWriter, 1000)
}

/*=============== PARALLAX EFFECT ===============*/
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset
    const parallax = document.querySelector('.home')
    
    if (parallax) {
        const speed = scrolled * 0.5
        parallax.style.transform = `translateY(${speed}px)`
    }
})

/*=============== INTERSECTION OBSERVER FOR ANIMATIONS ===============*/
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
        }
    })
}, observerOptions)

// Observe elements for animation
document.querySelectorAll('.skills__card, .projects__card, .contact__card').forEach(el => {
    observer.observe(el)
})

/*=============== PRELOADER ===============*/
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader')
    if (preloader) {
        preloader.style.opacity = '0'
        setTimeout(() => {
            preloader.style.display = 'none'
        }, 500)
    }
})

/*=============== ADD SCROLL REVEAL CDN ===============*/
// Add ScrollReveal CDN if not already included
if (typeof ScrollReveal === 'undefined') {
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/scrollreveal'
    script.onload = () => {
        // Initialize ScrollReveal after loading
        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2000,
            delay: 200,
        });

        sr.reveal('.home__data, .home__social, .home__scroll', {delay: 400})
        sr.reveal('.home__image', {delay: 600, origin: 'bottom'})
        sr.reveal('.about__data', {delay: 400})
        sr.reveal('.skills__card', {interval: 100})
        sr.reveal('.projects__card', {interval: 100})
        sr.reveal('.contact__card', {interval: 100})
        sr.reveal('.contact__form', {delay: 400, origin: 'left'})
        sr.reveal('.footer__content', {delay: 400})
    }
    document.head.appendChild(script)
}

/*=============== PERFORMANCE OPTIMIZATIONS ===============*/
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(scrollHeader, 10))
window.addEventListener('scroll', debounce(scrollUp, 10))
window.addEventListener('scroll', debounce(scrollActive, 10))

/*=============== ACCESSIBILITY IMPROVEMENTS ===============*/
// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu on escape
        const navMenu = document.getElementById('nav-menu')
        if (navMenu.classList.contains('show-menu')) {
            navMenu.classList.remove('show-menu')
        }
    }
})

// Add focus management for mobile menu
const navToggleBtn = document.getElementById('nav-toggle')
const navCloseBtn = document.getElementById('nav-close')

if (navToggleBtn) {
    navToggleBtn.addEventListener('click', () => {
        setTimeout(() => {
            const firstNavLink = document.querySelector('.nav__link')
            if (firstNavLink) {
                firstNavLink.focus()
            }
        }, 100)
    })
}

/*=============== FORM VALIDATION ===============*/
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
}

function validateForm() {
    const name = contactName.value.trim()
    const email = contactEmail.value.trim()
    const message = contactMessage.value.trim()
    
    let isValid = true
    let errors = []
    
    if (name.length < 2) {
        errors.push('El nombre debe tener al menos 2 caracteres')
        isValid = false
    }
    
    if (!validateEmail(email)) {
        errors.push('Por favor, ingresa un email válido')
        isValid = false
    }
    
    if (message.length < 10) {
        errors.push('El mensaje debe tener al menos 10 caracteres')
        isValid = false
    }
    
    if (!isValid) {
        showMessage(errors.join('. '), 'error')
    }
    
    return isValid
}

// Update form submission with validation
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault()
        
        if (validateForm()) {
            showMessage('¡Mensaje enviado exitosamente! ✅', 'success')
            
            // Clear form
            contactName.value = ''
            contactEmail.value = ''
            contactMessage.value = ''
        }
    })
}

