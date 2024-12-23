initCarousel("container1");
initCarousel("container2");
initCarousel("container3");
initCarousel("container4");
initCarousel("container5");
initCarousel("container6");

function initCarousel(containerId) {
  let currentIndex = 0;
  const container = document.getElementById(containerId);
  const slides = container.querySelectorAll(".carousel img");
  const totalSlides = slides.length;

  function changeSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
      currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
      currentIndex = 0;
    }

    updateCarousel();
  }

  function updateCarousel() {
    const newTransformValue = -currentIndex * 100 + "%";
    container.querySelector(
      ".carousel"
    ).style.transform = `translateX(${newTransformValue})`;
  }

  setInterval(() => changeSlide(1), 5000);
}
