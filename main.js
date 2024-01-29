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


const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
        const top = section.offsetTop - 50;
        const bottom = top + section.clientHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {

            const navLink = document.querySelector('.nav__link[href="#home"]');
            navLink.classList.add('active-link');
        } else {

            const navLink = document.querySelector('.nav__link[href="#education"]');
            navLink.classList.remove('active-link');
        }
    });
});
