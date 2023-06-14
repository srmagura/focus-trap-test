import "./style.css";

// This code should be considered part of the host app. So it can't be modified.

setInterval(() => {
  document.querySelector<HTMLElement>("#focusTrap input")!.focus();
}, 1000);

// CHALLENGE: Write code that allows the "FullContext ContentApp" input to
// remain focused.
