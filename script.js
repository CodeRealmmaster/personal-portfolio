// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved user preference
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
  darkModeToggle.checked = true;
}

// Toggle Dark Mode
darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
  }
});

// Mobile Navigation Toggle (Single Instance)
document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth Scrolling (Single Instance)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animate Skill Bars (Single Instance)
const skillBars = document.querySelectorAll('.progress-bar');

function animateSkillBars() {
  skillBars.forEach(bar => {
    const width = bar.getAttribute('data-width');
    bar.style.width = width;
  });
}

const skillsSection = document.querySelector('.skills');
const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    animateSkillBars();
    observer.unobserve(skillsSection);
  }
}, { threshold: 0.5 });

observer.observe(skillsSection);