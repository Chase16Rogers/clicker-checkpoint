
let gold = 0
let multiplyer = 1
let auto = 8

let shop = {
  miner: {
    cost: 50,
    add: 1,
  },
  pirate:{
    cost: 100,
    add: 5,
  },
  entrepreneur: {
  cost: 200,
  add: 10,
  },
  tycoon: {
    cost: 500,
    add: 20,
  },
  ceo: {
    cost: 1000,
    add: 50,
  },
  goldmine: {
    cost: 5000,
    add: 100,
  }
}

function addGold() {
  gold += 1 * multiplyer
  drawGold()
}

function drawGold() {
  document.getElementById("gold").innerText = gold
}

function market(item) {
  switch(item){
  case "miner":
    shop.miner.cost += 15
    auto += 1
  break;
  case "pirate":
    shop.pirate.cost += 25
    auto += 5
  break;
  case "entrepreneur":
    shop.entrepreneur.cost += 50
    auto += 10
  break;
  case "tycoon":
    shop.tycoon.cost += 250
    auto += 20
  }
}
 

function goldPerSecond() {
  gold += auto
  console.log(gold)
  drawGold()
}

setInterval(goldPerSecond, 1000)

drawGold()