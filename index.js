document.write(
  unescape(
    "%3c%70%3e%68%74%74%70%73%3a%2f%2f%77%77%77%2e%79%6f%75%74%75%62%65%2e%63%6f%6d%2f%77%61%74%63%68%3f%76%3d%64%51%77%34%77%39%57%67%58%63%51%3c%2f%70%3e"
  )
);

document.addEventListener("keydown", function (event) {
  if (event.code === "F12") {
    event.preventDefault();
    alert("Не так просто!");
  } else if (event.ctrlKey && event.shiftKey && event.code === "KeyI") {
    event.preventDefault();
    alert("Каков хитрец :)");
  }
  console.log(event.code);
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
