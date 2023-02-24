// Pizza Order by Shrey Shah

// Add an Event Listener to the button to run the placeOrder function
document.getElementById("btn").addEventListener("click", placeOrder);

// Store order code in a function
function placeOrder() {
  // INPUT
  let size = document.getElementById("size-in").value;
  let topping1 = document.getElementById("topping1-in").value;
  let topping2 = document.getElementById("topping2-in").value;

  // PROCESS
  let msg = `Your ${size} pizza with ${topping1} and ${topping2} will be ready soon!`;

  // OUTPUT
  document.getElementById("output").innerHTML = msg;
}
