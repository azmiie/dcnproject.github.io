let slideIndex = 0;
showSlides();

function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  const toggle = document.querySelector('.mobile-menu-toggle');
  
  navbar.classList.toggle('active');
  toggle.classList.toggle('active');
}

// Close menu when clicking on a link
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      const navbar = document.querySelector('.navbar');
      const toggle = document.querySelector('.mobile-menu-toggle');
      navbar.classList.remove('active');
      toggle.classList.remove('active');
    }
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  const navbar = document.querySelector('.navbar');
  const toggle = document.querySelector('.mobile-menu-toggle');
  const header = document.querySelector('header');
  
  if (!header.contains(e.target) && navbar.classList.contains('active')) {
    navbar.classList.remove('active');
    toggle.classList.remove('active');
  }
});

// for automatic banner
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slider");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); 
}

// for image slider on events
let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backbtn");
let nextBtn = document.getElementById("nextbtn");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehaviour = "auto";
});

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehaviour = "smooth";
  scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehaviour = "smooth";
  scrollContainer.scrollLeft -= 900;
});