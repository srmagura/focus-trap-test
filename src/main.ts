import "./style.css";

setInterval(() => {
  document.querySelector<HTMLElement>("#focusTrap input")!.focus();
}, 1000);
