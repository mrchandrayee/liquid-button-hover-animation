const button = document.getElementById("liquid-button");
const copyButton = document.getElementById("copy-css");
const codeBlock = document.getElementById("css-code");

const cssSource = `.liquid-button {
  position: relative;
  padding: 18px 45px;
  background-color: #ff007f;
  color: #fff;
  border: none;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
}

.btn-text {
  position: relative;
  z-index: 10;
}

.blob {
  position: absolute;
  top: 50%;
  width: 30px;
  height: 30px;
  background: #ff007f;
  border-radius: 50%;
  transform: translateY(-50%) scale(0);
  transition: transform 0.6s ease;
}

.blob:nth-child(2) { left: 10%; }
.blob:nth-child(3) { left: 30%; transition-delay: 0.1s; }
.blob:nth-child(4) { left: 50%; transition-delay: 0.05s; }
.blob:nth-child(5) { left: 60%; transition-delay: 0.1s; }
.blob:nth-child(6) { left: 85%; transition-delay: 0.15s; }

.liquid-button:hover .blob {
  transform: translateY(-50%) scale(3.5);
}

.liquid-button:hover {
  background-color: #ff3399;
}

.liquid-button:hover .blob {
  background-color: #3c82e8;
}`;

codeBlock.textContent = cssSource;

button.addEventListener("click", () => {
  const active = button.classList.toggle("is-active");
  button.setAttribute("aria-pressed", String(active));
});

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(cssSource);
    copyButton.textContent = "Copied!";
  } catch {
    copyButton.textContent = "Select code to copy";
  }
  setTimeout(() => copyButton.textContent = "Copy CSS", 1400);
});
