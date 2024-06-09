let imageContainerEL = document.querySelector('.image-container');

const prev = document.getElementById("prev");
const next = document.getElementById("next");
let x = 0;
let autoRotate;

prev.addEventListener('click', () => {
  x = x + 45;
  updateGallery();
  resetAutoRotate();
});

next.addEventListener('click', () => {
  x = x - 45;
  updateGallery();
  resetAutoRotate();
});

function updateGallery() {
  imageContainerEL.style.transform = `perspective(1000px) rotateY(${x}deg)`;
}

function startAutoRotate() {
  autoRotate = setInterval(() => {
    x = x - 45;
    updateGallery();
  }, 3000);
}

function resetAutoRotate() {
  clearInterval(autoRotate);
  startAutoRotate();
}

// Initialize the gallery and start auto rotation
updateGallery();
startAutoRotate();