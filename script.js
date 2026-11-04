/* ---------- Typing effect ---------- */
const phrases = [
  "B.Tech CSE Student",
  "Aspiring Software Developer",
  "Web Development Learner",
  "Data & Machine Learning Explorer",
  "Generative AI Enthusiast"
];
const typedEl = document.getElementById("typed");
let pi = 0, ci = 0, deleting = false;
function type() {
  const word = phrases[pi];
  typedEl.textContent = word.slice(0, ci);
  if (!deleting && ci < word.length) { ci++; setTimeout(type, 70); }
  else if (!deleting) { deleting = true; setTimeout(type, 1400); }
  else if (ci > 0) { ci--; setTimeout(type, 35); }
  else { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(type, 300); }
}
type();

/* ---------- Scroll progress + nav state ---------- */
const bar = document.getElementById("progress");
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  const h = document.documentElement;
  bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 + "%";
  nav.classList.toggle("scrolled", h.scrollTop > 40);
}, { passive: true });

/* ---------- Mobile menu ---------- */
const menuBtn = document.getElementById("menuBtn");
const links = document.getElementById("links");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  links.classList.toggle("open");
});
links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  menuBtn.classList.remove("open");
  links.classList.remove("open");
}));

/* ---------- Reveal on scroll + counters ---------- */
function countUp(el) {
  const target = +el.dataset.count;
  let n = 0;
  const step = () => {
    n += 1;
    el.textContent = n;
    if (n < target) setTimeout(step, 350);
  };
  step();
}
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("in");
      const num = e.target.querySelector("[data-count]");
      if (num && !num.dataset.done) { num.dataset.done = 1; countUp(num); }
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* ---------- Active nav link ---------- */
const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...links.querySelectorAll("a")];
const spy = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
    }
  });
}, { rootMargin: "-45% 0px -50% 0px" });
sections.forEach(s => spy.observe(s));

/* ---------- Hero card 3D tilt ---------- */
const tilt = document.getElementById("tilt");
if (tilt && window.matchMedia("(hover:hover)").matches) {
  tilt.addEventListener("mousemove", e => {
    const r = tilt.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    tilt.style.transform = `perspective(900px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`;
  });
  tilt.addEventListener("mouseleave", () => { tilt.style.transform = ""; });
}

/* ---------- Skill card spotlight ---------- */
document.querySelectorAll(".skill-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", e.clientX - r.left + "px");
    card.style.setProperty("--my", e.clientY - r.top + "px");
  });
});

/* ---------- Animated "network" background ---------- */
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");
let W, H, pts = [];
const mouse = { x: -999, y: -999 };
function resize() {
  W = canvas.width = innerWidth;
  H = canvas.height = innerHeight;
  const count = Math.min(70, Math.floor((W * H) / 22000));
  pts = Array.from({ length: count }, () => ({
    x: Math.random() * W, y: Math.random() * H,
    vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35
  }));
}
addEventListener("resize", resize);
addEventListener("mousemove", e => { mouse.x = e.clientX; mouse.y = e.clientY; });
function draw() {
  ctx.clearRect(0, 0, W, H);
  for (let i = 0; i < pts.length; i++) {
    const p = pts[i];
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0 || p.x > W) p.vx *= -1;
    if (p.y < 0 || p.y > H) p.vy *= -1;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 1.6, 0, 6.283);
    ctx.fillStyle = "rgba(94,234,212,.55)";
    ctx.fill();
    for (let j = i + 1; j < pts.length; j++) {
      const q = pts[j], d = Math.hypot(p.x - q.x, p.y - q.y);
      if (d < 130) {
        ctx.strokeStyle = `rgba(167,139,250,${(1 - d / 130) * .25})`;
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
      }
    }
    const md = Math.hypot(p.x - mouse.x, p.y - mouse.y);
    if (md < 160) {
      ctx.strokeStyle = `rgba(251,191,36,${(1 - md / 160) * .4})`;
      ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
    }
  }
  requestAnimationFrame(draw);
}
resize();
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) draw();

/* ---------- Footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();


/* ---------- Certificate lightbox ---------- */
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
function openCert(src) {
  lbImg.src = src;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}
function closeCert() {
  lightbox.hidden = true;
  lbImg.removeAttribute("src");
  document.body.style.overflow = "";
}
document.addEventListener("click", e => {
  const trigger = e.target.closest("[data-cert]");
  if (trigger) { openCert(trigger.dataset.cert); return; }
  if (!lightbox.hidden && e.target !== lbImg) closeCert();
});
document.addEventListener("keydown", e => { if (e.key === "Escape" && !lightbox.hidden) closeCert(); });
