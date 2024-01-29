function toggleExpansion(button) {
    const card = button.closest('.skill-card');
    card.classList.toggle('expanded');
    
    const additionalText = card.querySelector('.additional-text');
    additionalText.style.display = additionalText.style.display === 'block' ? 'none' : 'block';
}
