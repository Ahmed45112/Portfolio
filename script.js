const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 70);
      io.unobserve(e.target);
    }
  });
}, { threshold: .1 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));