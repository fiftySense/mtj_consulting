// Live day + time (topbar)
function updateLiveTime(){
  const now = new Date();
  const day = now.toLocaleDateString(undefined, { weekday: "short" });
  const time = now.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit", second:"2-digit" });
  const el = document.getElementById("liveTime");
  if (el) el.innerHTML = '<i class="bi bi-clock-fill"></i> ' + day + ' • ' + time;
}
updateLiveTime();
setInterval(updateLiveTime, 1000);

// Footer year
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();

// Mobile menu toggle
const burgerBtn = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
if (burgerBtn && mobileMenu){
  burgerBtn.addEventListener("click", () => mobileMenu.classList.toggle("show"));
}

// Accordion (one open at a time)
document.querySelectorAll(".acc-trigger").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".acc-item");
    const panel = item.querySelector(".acc-panel");
    const icon = btn.querySelector(".acc-icon");
    const isOpen = btn.getAttribute("aria-expanded") === "true";

    // Close all
    document.querySelectorAll(".acc-trigger").forEach((b) => {
      b.setAttribute("aria-expanded", "false");
      const it = b.closest(".acc-item");
      const p = it.querySelector(".acc-panel");
      const ic = b.querySelector(".acc-icon");
      if (p){ p.hidden = true; }
      if (ic){ ic.textContent = "+"; }
    });

    // Toggle current
    if (!isOpen){
      btn.setAttribute("aria-expanded", "true");
      panel.hidden = false;
      icon.textContent = "–";
    }
  });
});

// Animated counters (run once when visible)
function animateCounters(){
  const counters = document.querySelectorAll('.counterNum[data-target]');
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const duration = 1600;
    const startTime = performance.now();

    function update(now){
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      counter.textContent = value.toString();
      if(progress < 1){
        requestAnimationFrame(update);
      } else {
        counter.textContent = target.toLocaleString();
      }
    }
    requestAnimationFrame(update);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.counters');
  if(!section) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        animateCounters();
        observer.disconnect();
      }
    });
  }, { threshold: 0.4 });

  observer.observe(section);
});

// Back to top button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if(window.scrollY > 300){
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

