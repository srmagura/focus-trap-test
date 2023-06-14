import "./style.css";

const focusTrapInput = document.querySelector<HTMLElement>("#focusTrap input")!;

// This code should be considered part of the host app. So it can't be modified.

setInterval(() => {
  focusTrapInput.focus();
}, 1000);

// CHALLENGE: Write code that allows the "FullContext ContentApp" input to
// remain focused.

focusTrapInput.addEventListener(
  "focus",
  (e) => {
    console.log(
      "[input focus capture] Preventing default and stopping immediate propagation..."
    );
    e.preventDefault();
    e.stopImmediatePropagation();
  },
  { capture: true }
);

focusTrapInput.addEventListener(
  "focusin",
  (e) => {
    console.log(
      "[input focusin capture] Preventing default and stopping immediate propagation..."
    );
    e.preventDefault();
    e.stopImmediatePropagation();
  },
  { capture: true }
);

window.addEventListener(
  "focus",
  (e) => {
    console.log(
      "[window focus capture] Preventing default and stopping immediate propagation..."
    );
    e.preventDefault();
    e.stopImmediatePropagation();
  },
  { capture: true }
);

window.addEventListener(
  "focusin",
  (e) => {
    console.log(
      "[window focusin capture] Preventing default and stopping immediate propagation..."
    );
    e.preventDefault();
    e.stopImmediatePropagation();
  },
  { capture: true }
);
