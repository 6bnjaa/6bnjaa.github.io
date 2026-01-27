function toggleMenu() {
    document.getElementById("sideMenu").classList.toggle("active");
}

/* Animaciones al hacer scroll */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));
