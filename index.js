const barShare = document.querySelector(".share");
const iconeShare = document.querySelector(".shareIcone");

iconeShare.addEventListener("click", (e) => {
  e.stopPropagation();
  barShare.style.visibility = "visible";
});
document.querySelector("body").addEventListener("click", () => {
  barShare.style.visibility = "hidden";
});
