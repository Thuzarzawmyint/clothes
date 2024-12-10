document.addEventListener('scroll', function() {
  const text = document.querySelector('.text');
  const triggerPoint = window.innerHeight * 0.75; // Adjust this to your liking

  // Check if the text is in view
  if (text.getBoundingClientRect().top < triggerPoint) {
      text.classList.add('visible');
  }
});

const plusSign = document.getElementById('plusSign');
let isRotated = false;

plusSign.addEventListener('click', () => {
    isRotated = !isRotated; // Toggle state
    if (isRotated) {
        plusSign.style.transform = 'rotate(135deg)'; // Rotate to 135 degrees
    } else {
        plusSign.style.transform = 'rotate(-135deg)'; // Rotate to -135 degrees
    }
});
