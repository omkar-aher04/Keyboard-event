document.addEventListener("keydown", (e) => {
  document.getElementById("keyName").textContent = e.key === " " ? "Space" : e.key;
  document.getElementById("keyCode").textContent = e.keyCode;
});
