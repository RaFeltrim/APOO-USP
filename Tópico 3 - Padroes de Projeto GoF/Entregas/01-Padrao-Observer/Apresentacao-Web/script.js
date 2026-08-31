// ============================================================
// OBSERVER PATTERN — PRESENTATION SCRIPT
// SSC0124 - APOO | Rafael Feltrim
// ============================================================

let currentSlide = 1;
const totalSlides = 10; // Updated for the new compact structure

document.addEventListener('DOMContentLoaded', () => {
    updateProgress();
    updateCounter();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        changeSlide(1);
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        changeSlide(-1);
    } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(1);
    } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(totalSlides);
    }
});

function changeSlide(direction) {
    const newSlide = currentSlide + direction;
    if (newSlide < 1 || newSlide > totalSlides) return;
    goToSlide(newSlide);
}

function goToSlide(slideNum) {
    if (slideNum === currentSlide) return;

    const slides = document.querySelectorAll('.slide');
    
    // Hide all slides
    slides.forEach(s => {
        s.classList.remove('active');
    });

    // Show new slide
    const newSlide = slides[slideNum - 1];
    
    // Force reflow for fade animation
    void newSlide.offsetWidth;
    
    newSlide.classList.add('active');

    currentSlide = slideNum;
    updateProgress();
    updateCounter();
}

function updateProgress() {
    const progress = ((currentSlide) / totalSlides) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
}

function updateCounter() {
    document.getElementById('slideCounter').textContent = `${currentSlide} / ${totalSlides}`;
    document.getElementById('prevBtn').disabled = currentSlide === 1;
    document.getElementById('nextBtn').disabled = currentSlide === totalSlides;
}

// Code tabs
function showTab(tabId, btn) {
    const container = btn.closest('.code-container');
    container.querySelectorAll('.code-content').forEach(c => c.classList.add('hidden'));
    container.querySelectorAll('.code-tab').forEach(t => t.classList.remove('active'));
    document.getElementById(tabId).classList.remove('hidden');
    btn.classList.add('active');
}
