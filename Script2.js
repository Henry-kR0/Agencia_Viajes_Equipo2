// Confirmar que el JS está conectado
console.log("🌴 Los Chorros Resort JS cargado");

// 🔥 SCROLL SUAVE para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// 🎯 BOTÓN DE CONTACTO (alerta simple pro)
const btn = document.querySelector(".btn");

if (btn) {
    btn.addEventListener("click", () => {
        alert("📩 Gracias por tu interés en Los Chorros Resort. Pronto te contactaremos.");
    });
}


// ✨ EFECTO DE APARICIÓN AL BAJAR (fade-in simple)
const sections = document.querySelectorAll(".section, .card");

const mostrarElemento = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
};

const observer = new IntersectionObserver(mostrarElemento, {
    threshold: 0.2
});

sections.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "0.6s ease";
    observer.observe(el);
});
