import "./style.css";

const focusTrapInput = document.querySelector<HTMLElement>("#focusTrap input")!;

// This code should be considered part of the host app. So it can't be modified.

setInterval(() => {
  focusTrapInput.focus();
}, 1000);

// CHALLENGE: Write code that allows the "FullContext ContentApp" input to
// remain focused.

HTMLElement.prototype.focus = () => {
  console.log("focus caught");
};
