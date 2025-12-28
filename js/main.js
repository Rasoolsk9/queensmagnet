// Toggle Mobile Menu Drawer
const drawer = document.getElementById("drawer");
const menuBtn = document.getElementById("menuBtn");
const closeDrawer = document.getElementById("closeDrawer");

if (menuBtn) {
  menuBtn.onclick = () => {
    drawer.style.transform = "translateX(0)";
  };
}

if (closeDrawer) {
  closeDrawer.onclick = () => {
    drawer.style.transform = "translateX(-100%)";
  };
}

// Optional — Smooth scroll to sections
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// 🎞 Video Slider Logic
const videoTrack = document.getElementById("videoTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;
function updateSlider() {
  videoTrack.style.transform = `translateX(-${index * 100}%)`;
}

// Next
if (nextBtn) {
  nextBtn.onclick = () => {
    const total = videoTrack.children.length;
    index = (index + 1) % total;
    updateSlider();
  };
}

// Previous
if (prevBtn) {
  prevBtn.onclick = () => {
    const total = videoTrack.children.length;
    index = (index - 1 + total) % total;
    updateSlider();
  };
}

// Mobile Swipe
let startX = 0;
videoTrack?.addEventListener("touchstart", e => (startX = e.touches[0].clientX));
videoTrack?.addEventListener("touchend", e => {
  let diff = e.changedTouches[0].clientX - startX;
  if (diff < -50) nextBtn?.click();
  if (diff > 50) prevBtn?.click();
});
