// BRIGHTNESS IPO CALC BY SHREY SHAH

// Button Click Listener
document.getElementById("btn").addEventListener("click", btn1Clicked);

function btn1Clicked() {
  // INPUT
  let r = document.getElementById("r-in").value;
  let g = document.getElementById("g-in").value;
  let b = document.getElementById("b-in").value;

  // PROCESS
  let brightness = Math.sqrt(0.299 * r ** 2 + 0.587 * g ** 2 + 0.114 * b ** 2);
  let msg = `Lumiance = ${brightness}`;

  //OUTPUT
  document.getElementById("output").innerHTML = Math.round(brightness);
}
