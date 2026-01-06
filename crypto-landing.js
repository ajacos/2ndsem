// Smooth scrolling for navigation links
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

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    hamburger.classList.toggle('active');
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Animate elements on scroll
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

// Observe feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe crypto rows
document.querySelectorAll('.crypto-row:not(.crypto-header)').forEach((row, index) => {
    row.style.opacity = '0';
    row.style.transform = 'translateX(-30px)';
    row.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(row);
});

// Simulate live crypto price updates
function updateCryptoPrices() {
    const cryptoRows = document.querySelectorAll('.crypto-row:not(.crypto-header)');
    
    cryptoRows.forEach(row => {
        const priceElement = row.querySelector('.crypto-price-col');
        const changeElement = row.querySelector('.crypto-change-col');
        
        if (priceElement && changeElement) {
            // Simulate small price change
            const currentPrice = parseFloat(priceElement.textContent.replace('$', '').replace(',', ''));
            const change = (Math.random() - 0.5) * 0.02; // -1% to +1%
            const newPrice = currentPrice * (1 + change);
            const changePercent = (change * 100).toFixed(2);
            
            // Update price with animation
            priceElement.style.transition = 'color 0.3s ease';
            priceElement.style.color = change > 0 ? '#10b981' : '#ef4444';
            
            setTimeout(() => {
                priceElement.style.color = '#f8fafc';
            }, 300);
            
            // Update change percentage
            changeElement.textContent = `${change > 0 ? '+' : ''}${changePercent}%`;
            changeElement.className = 'crypto-change-col ' + (change > 0 ? 'positive' : 'negative');
        }
    });
}

// Update prices every 5 seconds
setInterval(updateCryptoPrices, 5000);

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show success message
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        submitButton.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        submitButton.disabled = true;
        submitButton.style.background = '#10b981';
        
        // Reset form
        setTimeout(() => {
            contactForm.reset();
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            submitButton.style.background = '';
        }, 3000);
    });
}

// Add hover effect to crypto rows
const cryptoRows = document.querySelectorAll('.crypto-row:not(.crypto-header)');
cryptoRows.forEach(row => {
    row.addEventListener('mouseenter', () => {
        row.style.transform = 'scale(1.01)';
        row.style.transition = 'all 0.3s ease';
    });
    
    row.addEventListener('mouseleave', () => {
        row.style.transform = 'scale(1)';
    });
});

// Trade button functionality
const tradeButtons = document.querySelectorAll('.btn-trade');
tradeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const cryptoRow = e.target.closest('.crypto-row');
        const cryptoName = cryptoRow.querySelector('.crypto-name-col strong').textContent;
        
        // Show notification
        showNotification(`Opening trade panel for ${cryptoName}...`);
    });
});

// Get Started and Start Trading button functionality
const ctaButtons = document.querySelectorAll('.btn-primary:not([type="submit"])');
ctaButtons.forEach(button => {
    if (button.textContent.includes('Get Started') || button.textContent.includes('Start Trading')) {
        button.addEventListener('click', () => {
            showNotification('Redirecting to registration...');
        });
    }
});

// Notification system
function showNotification(message) {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-info-circle"></i>
        <span>${message}</span>
    `;
    
    // Style notification
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
        display: flex;
        align-items: center;
        gap: 0.75rem;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const floatingCards = document.querySelectorAll('.floating-card');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / 800);
    }
    
    floatingCards.forEach((card, index) => {
        if (scrolled < window.innerHeight) {
            card.style.transform = `translateY(${scrolled * (0.3 + index * 0.1)}px)`;
        }
    });
});

// Number counter animation for stats
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        const value = Math.floor(progress * (end - start) + start);
        const text = element.textContent;
        
        // Check if it's a dollar amount, percentage, or regular number
        if (text.includes('$')) {
            element.textContent = '$' + value.toFixed(1) + (text.includes('B') ? 'B' : 'M') + '+';
        } else if (text.includes('M')) {
            element.textContent = value + 'M+';
        } else if (text.includes('+')) {
            element.textContent = value + '+';
        } else {
            element.textContent = value;
        }
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const h3 = entry.target.querySelector('h3');
            const text = h3.textContent;
            
            let endValue = 0;
            if (text.includes('$')) {
                endValue = parseFloat(text.replace(/[^0-9.]/g, ''));
            } else if (text.includes('M')) {
                endValue = parseInt(text);
            } else {
                endValue = parseInt(text);
            }
            
            animateValue(h3, 0, endValue, 2000);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});

// Console log for development
console.log('CryptoHub Landing Page Loaded Successfully! 🚀');
console.log('All interactive features initialized.');
