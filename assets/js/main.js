document.addEventListener('DOMContentLoaded', () => {
    // 1. Live Time
    function updateTime(){
        const el = document.getElementById("liveTime");
        if (!el) return;
        const now = new Date();
        el.innerHTML = '<i class="bi bi-clock-fill"></i> ' + 
            now.toLocaleDateString(undefined, { weekday: "short" }) + ' • ' + 
            now.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
    }
    setInterval(updateTime, 1000);
    updateTime();

    // 2. Mobile Menu
    const burger = document.getElementById("burgerBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    if (burger) burger.onclick = () => mobileMenu.classList.toggle("show");

// 3. Accordion (Contact Page) — uses [hidden] attribute (matches contact.html)
document.querySelectorAll(".acc-trigger").forEach(btn => {
  btn.addEventListener("click", () => {
    const panel = btn.nextElementSibling;                 // .acc-panel
    const icon  = btn.querySelector(".acc-icon");

    if (!panel || !panel.classList.contains("acc-panel")) return;

    const isOpen = !panel.hasAttribute("hidden");

    // Close all panels (one open at a time)
    document.querySelectorAll(".acc-panel").forEach(p => p.setAttribute("hidden", ""));
    document.querySelectorAll(".acc-trigger").forEach(b => b.setAttribute("aria-expanded", "false"));
    document.querySelectorAll(".acc-icon").forEach(i => i.textContent = "+");

    // If it was closed, open it
    if (!isOpen) {
      panel.removeAttribute("hidden");
      btn.setAttribute("aria-expanded", "true");
      if (icon) icon.textContent = "–";
    }
  });
});

    // 4. Counters (Index Page)
    const counterSection = document.querySelector('.counters');
    if (counterSection) {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                document.querySelectorAll('.counterNum').forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    let count = 0;
                    const step = target / 50;
                    const update = () => {
                        count += step;
                        if (count < target) {
                            counter.innerText = Math.floor(count).toLocaleString();
                            if(target === 2008) counter.innerText = Math.floor(count).toString(); // No comma fix
                            setTimeout(update, 20);
                        } else {
                            counter.innerText = (target === 2008) ? target : target.toLocaleString();
                        }
                    };
                    update();
                });
                observer.disconnect();
            }
        });
        observer.observe(counterSection);
    }

    // 5. Back to Top
    const btt = document.getElementById('backToTop');
    window.onscroll = () => {
        if(btt) btt.style.display = window.scrollY > 400 ? 'grid' : 'none';
    };
    if(btt) btt.onclick = () => window.scrollTo({top:0, behavior:'smooth'});

    // 6. Year
    const y = document.getElementById("year");
    if(y) y.textContent = new Date().getFullYear();
});