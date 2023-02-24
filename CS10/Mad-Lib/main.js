// Mad Lib by Shrey Shah

// Add an Event Listener to the button to run the madLib function
document.getElementById("btn").addEventListener("click", madLib);

// Store madlib code in a function
function madLib() {
  // INPUT
  let song = document.getElementById("song-in").value;
  let friend = document.getElementById("friend-in").value;
  let animal = document.getElementById("animal-in").value;

  // PROCESS
  let msg = `I was listening to ${song} when ${friend} tripped on a(n) ${animal}.`;

  // OUTPUT
  document.getElementById("output").innerHTML = msg;
}
