// GRADE CALCULATOR BY SHREY SHAH

// Button Click Listener
document.getElementById("btn").addEventListener("click", calcgrade);

function calcgrade() {
  // INPUT
  let clientside1 = +document.getElementById("cs-1").value;
  let structprog1 = +document.getElementById("sp-1").value;
  let structprog2 = +document.getElementById("sp-2").value;
  let clientside2 = +document.getElementById("cs-2").value;
  let projectA = +document.getElementById("proj-a").value;

  // PROCESS
  let total =
    (clientside1 + structprog1 + structprog2 + clientside2 + projectA) / 5;

  //OUTPUT
  document.getElementById("output").innerHTML = total;
}
