const nav = document.getElementById("nav"),
  burger = document.getElementById("burger"),
  menu = document.getElementById("menu");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });
burger.addEventListener("click", () => {
  const o = menu.classList.toggle("open");
  burger.classList.toggle("open", o);
  burger.setAttribute("aria-expanded", o);
});
menu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    menu.classList.remove("open");
    burger.classList.remove("open");
  }),
);
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.15 },
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
const btns = document.querySelectorAll(".filters button");
btns.forEach((b) =>
  b.addEventListener("click", () => {
    btns.forEach((x) => x.classList.remove("on"));
    b.classList.add("on");
    document
      .querySelectorAll("[data-cat]")
      .forEach((c) =>
        c.classList.toggle(
          "hide",
          b.dataset.f !== "all" && c.dataset.cat !== b.dataset.f,
        ),
      );
  }),
);
const form = document.getElementById("contactForm");
if (form)
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("ok").style.display = "block";
    form.reset();
  });
