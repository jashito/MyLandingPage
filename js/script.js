/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

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

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true, // Animations repeat
})

// Home section animations
sr.reveal('.home__subtitle', {delay: 100})
sr.reveal('.home__title', {delay: 200})
sr.reveal('.home__description', {delay: 300})
sr.reveal('.home__info', {delay: 400})
sr.reveal('.home__stats', {delay: 500, origin: 'bottom'})
sr.reveal('.home__buttons', {delay: 600, origin: 'bottom'})
sr.reveal('.home__image', {delay: 700, origin: 'right'})

// Trusted by section
sr.reveal('.trusted-by__title', {delay: 100})
sr.reveal('.trusted-by__logos', {delay: 200, interval: 100})

// Value proposition section
sr.reveal('.value-proposition .section__title', {delay: 100})
sr.reveal('.value-proposition .section__subtitle', {delay: 200})
sr.reveal('.value-proposition__card', {delay: 300, interval: 200, origin: 'bottom'})

// About section
sr.reveal('.about .section__title', {delay: 100})
sr.reveal('.about .section__subtitle', {delay: 200})
sr.reveal('.about__description', {delay: 300, interval: 100})
sr.reveal('.about__achievements', {delay: 400, origin: 'bottom'})

// Services section
sr.reveal('.services .section__title', {delay: 100})
sr.reveal('.services .section__subtitle', {delay: 200})
sr.reveal('.services__card', {delay: 300, interval: 200, origin: 'bottom'})

// Industries section
sr.reveal('.industries .section__title', {delay: 100})
sr.reveal('.industries .section__subtitle', {delay: 200})
sr.reveal('.industries__card', {delay: 300, interval: 100, origin: 'bottom'})

// Projects section
sr.reveal('.projects .section__title', {delay: 100})
sr.reveal('.projects .section__subtitle', {delay: 200})
sr.reveal('.projects__card', {delay: 300, interval: 200, origin: 'bottom'})
sr.reveal('.projects__cta', {delay: 500, origin: 'bottom'})

// Contact section
sr.reveal('.contact .section__title', {delay: 100})
sr.reveal('.contact .section__subtitle', {delay: 200})
sr.reveal('.contact__card', {delay: 300, interval: 100, origin: 'left'})
sr.reveal('.contact__form', {delay: 400, origin: 'right'})

/*=============== CONTACT FORM ===============*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactCompany = document.getElementById('contact-company'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()
    
    // Check if the field has a value
    if(contactName.value === '' || contactEmail.value === '' || contactMessage.value === ''){
        // Add and remove color
        contactForm.classList.remove('color-green')
        contactForm.classList.add('color-red')
        
        // Show message
        showMessage('Por favor, completa todos los campos requeridos ❌')
    } else {
        // Simulate form submission (in real implementation, you would send to a server)
        contactForm.classList.add('color-green')
        contactForm.classList.remove('color-red')
        
        // Show message and reset form
        showMessage('¡Mensaje enviado exitosamente! Te contactaré pronto 🚀')
        
        // Remove message after 5 seconds
        setTimeout(() => {
            contactForm.reset()
            contactForm.classList.remove('color-green')
        }, 5000)
    }
}

const showMessage = (message) => {
    // Create message element
    const messageElement = document.createElement('div')
    messageElement.textContent = message
    messageElement.classList.add('contact__message')
    
    // Insert message
    contactForm.appendChild(messageElement)
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageElement.remove()
    }, 5000)
}

contactForm.addEventListener('submit', sendEmail)

/*=============== TYPING ANIMATION ===============*/
const typingTexts = [
    'Inteligencia Artificial',
    'Automatización B2B',
    'Desarrollo de Software',
    'Consultoría Estratégica'
]

let textIndex = 0
let charIndex = 0
let isDeleting = false
const typingSpeed = 100
const deletingSpeed = 50
const pauseTime = 2000

const typeWriter = () => {
    const currentText = typingTexts[textIndex]
    const typingElement = document.querySelector('.home__description .gradient-text:last-child')
    
    if (!typingElement) return
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1)
        charIndex--
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1)
        charIndex++
    }
    
    let speed = isDeleting ? deletingSpeed : typingSpeed
    
    if (!isDeleting && charIndex === currentText.length) {
        speed = pauseTime
        isDeleting = true
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        textIndex = (textIndex + 1) % typingTexts.length
    }
    
    setTimeout(typeWriter, speed)
}

// Start typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeWriter, 1000)
})

/*=============== SMOOTH SCROLLING ===============*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    })
})

/*=============== PARALLAX EFFECT ===============*/
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset
    const parallaxElements = document.querySelectorAll('.home__image')
    
    parallaxElements.forEach(element => {
        const speed = 0.5
        element.style.transform = `translateY(${scrolled * speed}px)`
    })
})

/*=============== COUNTER ANIMATION ===============*/
const animateCounters = () => {
    const counters = document.querySelectorAll('.home__stat-number, .about__achievement-number, .projects__metric-number')
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/[^\d]/g, ''))
        const increment = target / 100
        let current = 0
        
        const updateCounter = () => {
            if (current < target) {
                current += increment
                if (counter.textContent.includes('+')) {
                    counter.textContent = Math.ceil(current) + '+'
                } else if (counter.textContent.includes('%')) {
                    counter.textContent = Math.ceil(current) + '%'
                } else {
                    counter.textContent = Math.ceil(current)
                }
                setTimeout(updateCounter, 20)
            } else {
                counter.textContent = counter.textContent // Reset to original
            }
        }
        
        updateCounter()
    })
}

/*=============== INTERSECTION OBSERVER FOR ANIMATIONS ===============*/
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate')
            
            // Trigger counter animation for stats sections
            if (entry.target.classList.contains('home__stats') || 
                entry.target.classList.contains('about__achievements')) {
                animateCounters()
            }
        }
    })
}, observerOptions)

// Observe elements for animation
document.querySelectorAll('.home__stats, .about__achievements, .value-proposition__card, .services__card').forEach(el => {
    observer.observe(el)
})

/*=============== FORM VALIDATION ===============*/
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
}

const validateForm = () => {
    const name = contactName.value.trim()
    const email = contactEmail.value.trim()
    const message = contactMessage.value.trim()
    
    let isValid = true
    
    // Reset previous error states
    document.querySelectorAll('.contact__form-input').forEach(input => {
        input.classList.remove('error')
    })
    
    if (name === '') {
        contactName.classList.add('error')
        isValid = false
    }
    
    if (email === '' || !validateEmail(email)) {
        contactEmail.classList.add('error')
        isValid = false
    }
    
    if (message === '') {
        contactMessage.classList.add('error')
        isValid = false
    }
    
    return isValid
}

// Add real-time validation
contactEmail.addEventListener('blur', () => {
    if (contactEmail.value && !validateEmail(contactEmail.value)) {
        contactEmail.classList.add('error')
    } else {
        contactEmail.classList.remove('error')
    }
})

/*=============== LOADING ANIMATION ===============*/
window.addEventListener('load', () => {
    document.body.classList.add('loaded')
})

/*=============== PERFORMANCE OPTIMIZATIONS ===============*/
// Debounce scroll events
const debounce = (func, wait) => {
    let timeout
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout)
            func(...args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
    }
}

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(() => {
    blurHeader()
    scrollUp()
    scrollActive()
}, 10))

/*=============== ACCESSIBILITY IMPROVEMENTS ===============*/
// Keyboard navigation for mobile menu
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('show-menu')) {
        navMenu.classList.remove('show-menu')
    }
})

// Focus management for mobile menu
navToggle?.addEventListener('click', () => {
    setTimeout(() => {
        const firstLink = navMenu.querySelector('.nav__link')
        firstLink?.focus()
    }, 100)
})

/*=============== PRELOAD CRITICAL RESOURCES ===============*/
const preloadImages = () => {
    const images = [
        'assets/images/background.jpg',
        'assets/icons/power_platform.webp',
        'assets/icons/llm.jpg',
        'assets/icons/low_code.png',
        'assets/icons/saas.jpg',
        'assets/icons/iac.jpg',
        'assets/icons/b2b_automation.jpg'
    ]
    
    images.forEach(src => {
        const img = new Image()
        img.src = src
    })
}

// Preload images when page loads
document.addEventListener('DOMContentLoaded', preloadImages)

