// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "body {\n  background-color: #fff;\n  color: #14181b;\n}\n\n.filler {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#scroll-vid {\n  height: 100vh;\n  width: 100%;\n  object-fit: cover;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}