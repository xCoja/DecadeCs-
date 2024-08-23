// Apply animation to all nav-link elements in the navigation
gsap.from(".nav-link", { 
    duration: 0.5, 
    opacity: 0, 
    y: 20, 
    stagger: 0.1,
    ease: "power2.out"
});

gsap.from(".logo-text", { 
    duration: 0.5, 
    opacity: 0, 
    y: -20, 
    ease: "power2.out"
});

gsap.from(".main-section h1, .bonuses-section h1, .leaderboards-section h1, .challenges-section h1", { 
    duration: 0.5, 
    opacity: 0, 
    y: -20, 
    delay: 0.1, 
    ease: "power2.out"
});

gsap.from(".main-section p, .bonuses-section p, .leaderboards-section p, .challenges-section p", { 
    duration: 0.5, 
    opacity: 0, 
    y: 20, 
    delay: 0.2, 
    ease: "power2.out"
});

// Function to handle active link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // Check if the current scroll position is within this section
        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        // Check if the current section is 'bonuses-section' and link matches '#rewards'
        if (current === 'bonuses-section' && link.getAttribute('href').includes('#rewards')) {
            link.classList.add('active');
        } else if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });

    // Remove the underline if the scroll is above the first section
    if (window.scrollY < sections[0].offsetTop) {
        navLinks.forEach(link => link.classList.remove('active'));
    }
});

// Smooth scroll to rewards section on arrow click
document.getElementById('scroll-arrow').addEventListener('click', function() {
    document.getElementById('rewards').scrollIntoView({
        behavior: 'smooth'
    });
});


function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const titleContainer = document.querySelector('.h1-title-container');
  
    navLinks.classList.toggle('active');
    titleContainer.classList.toggle('active');
  }