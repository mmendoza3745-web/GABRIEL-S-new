/* ═══════════════════════════════════════
   LAVANDERÍA GABRIEL'S — apps.js
═══════════════════════════════════════ */

// ── Toast de bienvenida ──
window.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('welcomeToast');
    if (el) {
        setTimeout(() => {
            const toast = new bootstrap.Toast(el);
            toast.show();
        }, 1800);
    }

    // ── Animaciones al hacer scroll ──
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, i * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
