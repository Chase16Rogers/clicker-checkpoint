let gold = 0
let multiplyer = 1

function addGold() {
  gold += 1 * multiplyer
  drawGold()
}

function drawGold() {
  document.getElementById("gold").innerText = gold
}





drawGold()