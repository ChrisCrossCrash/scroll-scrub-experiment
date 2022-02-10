// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ":root {\n  --dark: #191f23;\n  --light: #fff;\n}\n\nbody {\n  background-color: var(--light);\n  color: var(--dark);\n  font-family: Quicksand, sans-serif;\n}\n\nh1 {\n  font-weight: 500;\n}\n\np {\n  font-weight: 300;\n}\n\nsvg {\n  fill: var(--dark);\n}\n\n.filler-bottom {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.filler-bottom svg {\n  width: 100%;\n  height: 100%;\n  max-width: 380px;\n  max-height: 380px;\n  transform: rotate(180deg);\n}\n\n.hero {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 1rem;\n  max-width: 900px;\n  margin: 0 auto;\n}\n.hero__text {\n  flex: 0.5;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0;\n}\n.hero__text h1 {\n  font-size: min(12vw, 4rem);\n  text-transform: uppercase;\n  margin-bottom: 1.5rem;\n}\n.hero__text p {\n  font-size: 1.5rem;\n}\n.hero__image {\n  flex: 1;\n  width: 100%;\n  height: 100%;\n  max-height: 380px;\n  max-width: 380px;\n  margin: 0 auto;\n}\n.hero__image svg {\n  width: 100%;\n  height: 100%;\n}\n\n@media (min-width: 650px) {\n  .hero {\n    flex-direction: row;\n  }\n}\n#scroll-vid {\n  height: 100vh;\n  width: 100%;\n  object-fit: cover;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}