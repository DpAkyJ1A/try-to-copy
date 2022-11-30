document.write(unescape("%3c%70%3e%3c%2f%70%3e"));

document.addEventListener("keydown", function (event) {
  event.preventDefault();
  if (event.code === "F12") {
    alert("Не так просто!");
  } else if (
    (event.ctrlKey || event.metaKey) &&
    event.shiftKey &&
    event.code === "KeyI"
  ) {
    alert("Каков хитрец :)");
  }
});

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  alert("Попробуй что-нибудь другое)");
});

let h = window.innerHeight,
  w = window.innerWidth;
window.onresize = function () {
  if (h != window.innerHeight || w != window.innerWidth) {
    window.close();
  }
};

let visitCounter = +localStorage.getItem("vizit") || 0;
visitCounter++;
localStorage.setItem("vizit", `${visitCounter}`);

if (visitCounter >= 2) {
  alert("Даже не думай!");
  alert(`Это твоя ${visitCounter} попытка ;)`);
}
