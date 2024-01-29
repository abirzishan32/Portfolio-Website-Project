function toggleExpansion(button) {
    const card = button.closest('.skill-card');
    card.classList.toggle('expanded');
    
    const additionalText = card.querySelector('.additional-text');
    additionalText.style.display = additionalText.style.display === 'block' ? 'none' : 'block';
}

const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

navClose.addEventListener('click', () => {
    navMenu.classList.remove('active');
});
