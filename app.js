import { loadAnimations, animateHand } from "./js/anim.js";
import { scrollTrigger } from "./js/scroll.js";
import "./index.css";

loadAnimations()
scrollTrigger('#intro-hand-container img', {
  triggerHeight: 300,
  cb: animateHand
})

const buttons = document.querySelectorAll('[data-filter]');
const sections = document.querySelectorAll('.gallery');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    sections.forEach(section => {
      if (filter === 'all' || section.classList.contains(filter)) {
        section.classList.remove('hidden');
      } else {
        section.classList.add('hidden');
      }
    });
  });
});

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

document.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG' && e.target.matches('.gallery img') && !e.target.closest('#lightbox')) {
    lightboxImg.src = e.target.src;
    lightbox.classList.add('active');
  }
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    lightbox.classList.remove('active');
  }
});
