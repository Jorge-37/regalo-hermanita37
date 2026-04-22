window.onload = () => {

  const caja = document.querySelector(".caja");
  const carta = document.getElementById("cartaWrapper");

  caja.addEventListener("click", () => {
    caja.classList.add("open");

    setTimeout(() => {
      carta.classList.add("activo");
    }, 500);
  });

  carta.addEventListener("click", (e) => {
    if (e.target === carta) {
      carta.classList.remove("activo");
      caja.classList.remove("open");
    }
  });

  // CONFETI
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();

  let confetis = [];

  function crearConfetis() {
    confetis = [];
    for (let i = 0; i < 120; i++) {
      confetis.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 4 + 2,
        d: Math.random() * 1 + 0.5,
        color: `hsl(${Math.random() * 360}, 70%, 80%)`
      });
    }
  }

  crearConfetis();

  function dibujar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confetis.forEach(c => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
      ctx.fillStyle = c.color;
      ctx.fill();

      c.y += c.d;

      if (c.y > canvas.height) {
        c.y = 0;
        c.x = Math.random() * canvas.width;
      }
    });

    requestAnimationFrame(dibujar);
  }

  dibujar();

  window.addEventListener("resize", () => {
    resizeCanvas();
    crearConfetis();
  });

};