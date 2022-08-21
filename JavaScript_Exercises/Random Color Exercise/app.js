const rgbButton = document.querySelector("#rgbButton");
const h2 = document.querySelector("h2");
rgbButton.addEventListener("click", function () {
  //   console.log("Working");
  let btnColor = randomColorfn();
  document.querySelector("body").style.backgroundColor = btnColor;
  h2.innerText = btnColor;
});

const randomColorfn = function () {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};
