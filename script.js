const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let index = 0;

function showSlide() {
  carousel.style.transform = `translateX(-${index * 600}px)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % 9;
  showSlide();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + 9) % 9;
  showSlide();
});

setInterval(() => {
  index = (index + 1) % 9;
  showSlide();
}, 5000);
