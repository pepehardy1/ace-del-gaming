// Animaciones y efectos
document.addEventListener('DOMContentLoaded', function() {
    // Efecto parallax en el fondo
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero');
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling para los enlaces del navbar
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

// Intersection Observer para animaciones al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos que deben animarse
document.querySelectorAll('.product-card, .section-title, .about-content, .contact-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Función typeWriter deshabilitada - el título aparece inmediatamente
/*
function typeWriter(element, text, speed = 80) {
    let i = 0;
    element.innerHTML = '';
    element.style.borderRight = '3px solid #00ff88';
    element.style.animation = 'blink 1s infinite';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            setTimeout(() => {
                element.style.borderRight = 'none';
                element.style.animation = 'none';
            }, 1000);
        }
    }
    type();
}
*/

// Inicializar título inmediato (sin efecto de escritura)
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        // El título aparece inmediatamente sin animación
        heroTitle.style.borderRight = 'none';
        heroTitle.style.animation = 'none';
    }
});

// Efecto de partículas flotantes
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        overflow: hidden;
    `;
    
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < 50; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: linear-gradient(45deg, #00ff88, #0066ff);
        border-radius: 50%;
        animation: float ${Math.random() * 3 + 2}s infinite linear;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        opacity: ${Math.random() * 0.5 + 0.3};
    `;
    
    container.appendChild(particle);
    
    // Eliminar partícula después de la animación
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 5000);
}

// Inicializar partículas
document.addEventListener('DOMContentLoaded', createParticles);

// Regenerar partículas periódicamente
setInterval(createParticles, 10000);

// Efectos de hover en las cards
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        this.style.boxShadow = '0 20px 40px rgba(0, 255, 136, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 10px 30px rgba(0, 255, 136, 0.1)';
    });
});

// Animación de pulso en botones
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// CSS para animaciones adicionales
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% { transform: translateY(100vh) rotate(0deg); }
        100% { transform: translateY(-100vh) rotate(360deg); }
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes blink {
        0%, 50% { border-color: transparent; }
        51%, 100% { border-color: #00ff88; }
    }
    
    .navbar.scrolled {
        background: rgba(0, 0, 0, 0.95) !important;
        backdrop-filter: blur(10px);
    }
`;
document.head.appendChild(style);

// PayPal price validation
function validatePayPalPrice(productName, minPrice) {
    const userPrice = prompt(`Ingresa el monto para ${productName} (mínimo $${minPrice} USD):`);
    const price = parseFloat(userPrice);
    
    if (isNaN(price) || price < minPrice) {
        alert(`Por favor ingresa un monto válido. Mínimo: $${minPrice} USD`);
        return false;
    }
    
    return price;
}

// Validation for PayPal links
document.querySelectorAll('.paypal-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const productName = this.getAttribute('data-product');
        const minPrice = parseFloat(this.getAttribute('data-min-price'));
        const baseUrl = this.getAttribute('data-paypal-url');
        
        const finalPrice = validatePayPalPrice(productName, minPrice);
        if (finalPrice) {
            const paypalUrl = `${baseUrl}&amount=${finalPrice}`;
            window.open(paypalUrl, '_blank');
            
            setTimeout(() => {
                alert('Después del pago, contacta via Telegram @acedelgaming para recibir tu enlace de descarga.');
            }, 1000);
        }
    });
});

// Gaming Chatbot Class
class GamingChatbot {
    constructor() {
        this.isOpen = false;
        this.initialized = false; // Flag para evitar inicialización múltiple
        this.responses = {
            'hola': [
                '¡Hola! Soy Gohan. Me alegra verte aquí en el sitio web gaming de Ace. ¿En qué puedo ayudarte?', 
                'Saludos. Soy Gohan, y estoy aquí para guiarte en tus aventuras gaming. ¿Qué necesitas?', 
                'Hola amigo. Soy Gohan, y mi conocimiento está a tu servicio. ¿Cómo puedo asistirte?'
            ],
            'mods': [
                'Tenemos mods excepcionales: PES 2026 con Messi, Starfield con más de cien modificaciones increíbles, y en desarrollo Cyberpunk y Dragon Ball Xenoverse 2. La calidad te sorprenderá.', 
                'Como alguien que valora la excelencia, puedo asegurarte que nuestros mods están diseñados para darte la mejor experiencia gaming posible.'
            ],
            'programas': [
                'Nuestros programas son herramientas profesionales: Game Optimizer Pro para optimizar tu experiencia, y Anti-Cheat Detector para mantener la justicia en el gaming. Son esenciales para cualquier gamer serio.', 
                'Los programas que ofrecemos han sido desarrollados con dedicación y conocimiento técnico para elevar tu experiencia gaming al siguiente nivel.'
            ],
            'precio': [
                'Los precios están entre 3 y 4 dólares. Son precios justos y accesibles para software de alta calidad que realmente mejorará tu experiencia gaming.', 
                'Con precios entre 3-4 dólares, ofrecemos excelente valor. La relación calidad-precio es inmejorable.'
            ],
            'descuento': [
                'Siempre consideramos ofertas especiales para nuestra comunidad gaming. Mantente atento a promociones para usuarios leales.', 
                'La generosidad hacia los gamers dedicados es importante. Próximamente habrá beneficios especiales.'
            ],
            'contacto': [
                'Ace está disponible en rebelnightcompany@gmail.com y Telegram @acedelgaming. Después del pago por PayPal, contacta https://t.me/acedelgaming para recibir tu enlace de descarga. El proceso es simple y confiable.', 
                'El equipo de Ace maneja todo profesionalmente. PayPal genera tu comprobante automáticamente, y el soporte post-venta es excelente.'
            ],
            'ayuda': [
                'Soy Gohan, tu asistente gaming. Ace es Ingeniero en Informática y Diseñador, profesionales en quienes puedes confiar completamente. ¿Qué aventura gaming quieres explorar?', 
                'Estoy aquí para ayudarte con cualquier duda sobre mods, programas o el proceso de compra. Mi conocimiento está a tu disposición.'
            ],
            'gracias': [
                'De nada, fue un placer ayudarte. Que tengas excelentes aventuras gaming y disfrutes al máximo tu experiencia.', 
                'Ha sido un honor asistirte. Espero que encuentres exactamente lo que buscas para tu gaming.', 
                'Me alegra haber sido útil. Que tus sesiones gaming sean épicas y divertidas.'
            ],
            'pagina': [
                'Para servicios de desarrollo de páginas web, te invito a contactarnos por Instagram para una consulta personalizada. Allí podrás ver nuestro portafolio y ejemplos de trabajos anteriores.', 
                'Si necesitas una página web profesional, síguenos en Instagram donde mostramos nuestros proyectos y puedes contactarnos directamente para cotizaciones.'
            ],
            'web': [
                'Para desarrollo web y páginas profesionales, visítanos en Instagram donde tenemos nuestro portafolio completo. Ahí puedes ver ejemplos reales y contactarnos para tu proyecto.', 
                'Nuestros servicios de desarrollo web están disponibles desde $110 USD. Te recomiendo seguirnos en Instagram para ver ejemplos de nuestro trabajo y contactarnos directamente.'
            ],
            'desarrollo': [
                'Ofrecemos servicios de desarrollo web profesional. Para ver nuestro portafolio y ejemplos reales, búscanos en Instagram donde mostramos todos nuestros proyectos web.', 
                'Para desarrollo de sitios web, Instagram es el mejor lugar para ver nuestro trabajo. Ahí encontrarás ejemplos y podrás contactarnos para tu proyecto personalizado.'
            ],
            'sitio': [
                'Si necesitas un sitio web, te invitamos a seguirnos en Instagram donde publicamos nuestro portafolio de desarrollo web. Ahí puedes ver la calidad de nuestro trabajo y contactarnos.', 
                'Para sitios web profesionales, visita nuestro Instagram donde mostramos ejemplos reales de páginas que hemos desarrollado. ¡Te sorprenderá la calidad!'
            ],
            'instagram': [
                'Perfecto! En nuestro Instagram encontrarás todo nuestro portafolio de desarrollo web, ejemplos de páginas profesionales y podrás contactarnos directamente para cotizaciones.', 
                '¡Excelente elección! Instagram es donde mostramos nuestros mejores trabajos de desarrollo web. Síguenos para ver ejemplos increíbles y contactarnos fácilmente.'
            ]
        };
        this.init();
    }

    init() {
        // Esperar a que el DOM esté completamente cargado
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupElements());
        } else {
            this.setupElements();
        }
    }

    setupElements() {
        // Evitar inicialización múltiple
        if (this.initialized) {
            return;
        }
        
        this.chatbotFloatBtn = document.getElementById('chatbot-float-btn');
        this.chatbotContainer = document.getElementById('gaming-chatbot');
        this.chatbotToggle = document.getElementById('chatbot-toggle');
        this.chatbotMessages = document.getElementById('chatbot-messages');
        this.chatbotInput = document.getElementById('chatbot-input');
        this.chatbotSend = document.getElementById('chatbot-send');
        this.suggestions = document.querySelectorAll('.suggestion-btn');

        // Verificar que todos los elementos existen
        if (this.chatbotFloatBtn && this.chatbotContainer && this.chatbotToggle && 
            this.chatbotMessages && this.chatbotInput && this.chatbotSend) {
            
            this.initialized = true; // Marcar como inicializado
            this.bindEvents();
            
            // Mensaje de bienvenida de Gohan
            setTimeout(() => {
                this.addMessage('¡Hola! Soy Gohan, tu asistente gaming. Me alegra verte aquí en Ace Del Gaming. Estoy listo para ayudarte con información sobre nuestros mods y programas. ¿En qué puedo asistirte?', 'bot');
            }, 1000);
            
        } else {
            console.error('Algunos elementos del chatbot no se encontraron en el DOM');
        }
    }

    bindEvents() {
        // Toggle chatbot
        this.chatbotFloatBtn.addEventListener('click', () => this.toggleChatbot());
        this.chatbotToggle.addEventListener('click', () => this.toggleChatbot());

        // Send message
        this.chatbotSend.addEventListener('click', () => this.sendMessage());
        this.chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        // Suggestion buttons
        this.suggestions.forEach(btn => {
            btn.addEventListener('click', () => {
                const message = btn.getAttribute('data-message');
                this.sendMessage(message);
            });
        });
    }

    toggleChatbot() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.chatbotContainer.classList.add('active');
            this.chatbotFloatBtn.style.display = 'none';
            this.removeBadge();
        } else {
            this.chatbotContainer.classList.remove('active');
            this.chatbotFloatBtn.style.display = 'flex';
        }
    }

    removeBadge() {
        const badge = document.querySelector('.notification-badge');
        if (badge) {
            badge.style.display = 'none';
        }
    }

    sendMessage(message = null) {
        const text = message || this.chatbotInput.value.trim();
        if (!text) return;

        this.addMessage(text, 'user');
        this.chatbotInput.value = '';

        // Show typing indicator
        this.showTypingIndicator();

        // Generate response after delay
        setTimeout(() => {
            this.hideTypingIndicator();
            const response = this.generateResponse(text);
            this.addMessage(response, 'bot');
        }, 1500);
    }

    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;

        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        if (sender === 'bot') {
            avatar.innerHTML = '<img src="gohanchatbot.jpeg" alt="Gohan" style="width: 30px; height: 30px; border-radius: 50%; object-fit: cover;">';
        } else {
            avatar.innerHTML = '<i class="fas fa-user"></i>';
        }

        const content = document.createElement('div');
        content.className = 'message-content';

        const messageText = document.createElement('span');
        messageText.className = 'message-text';
        messageText.textContent = text;

        const time = document.createElement('div');
        time.className = 'message-time';
        time.textContent = new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });

        content.appendChild(messageText);
        content.appendChild(time);
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(content);

        this.chatbotMessages.appendChild(messageDiv);
        this.scrollToBottom();
    }

    showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing-message';
        typingDiv.innerHTML = `
            <div class="message-avatar">
                <img src="gohanchatbot.jpeg" alt="Gohan" style="width: 30px; height: 30px; border-radius: 50%; object-fit: cover;">
            </div>
            <div class="typing-indicator">
                <span>Gohan está escribiendo</span>
                <div class="typing-dots">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        `;
        this.chatbotMessages.appendChild(typingDiv);
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        const typingMessage = document.querySelector('.typing-message');
        if (typingMessage) {
            typingMessage.remove();
        }
    }

    generateResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Buscar palabras clave
        for (const [key, responses] of Object.entries(this.responses)) {
            if (lowerMessage.includes(key)) {
                return responses[Math.floor(Math.random() * responses.length)];
            }
        }

        // Respuestas por defecto de Gohan
        const defaultResponses = [
            'Esa es una pregunta interesante. ¿Puedes preguntarme sobre mods, programas o precios? Estaré encantado de ayudarte.',
            'No estoy seguro de entender completamente, pero estoy aquí para ayudarte. ¿Qué tal si me preguntas sobre los mods gaming?',
            'Esa pregunta me parece un poco compleja. Puedo contarte cosas increíbles sobre gaming. ¿Qué te interesa saber?',
            'Hmm, esa pregunta requiere más contexto. Mejor pregúntame sobre los excelentes mods y programas que tenemos disponibles.'
        ];

        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }

    scrollToBottom() {
        this.chatbotMessages.scrollTop = this.chatbotMessages.scrollHeight;
    }
}

// Initialize chatbot when page loads (solo una vez)
let chatbotInstance = null;
document.addEventListener('DOMContentLoaded', () => {
    if (!chatbotInstance) {
        chatbotInstance = new GamingChatbot();
    }
});