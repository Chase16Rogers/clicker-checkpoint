
let gold = 0
let multiplyer = 1
let auto = 0

let shop = {
  pickaxe: {
    name: "Pickaxe",
    cost: 1000,
    img: "pickaxe.png",
    count: 0,
    add: 2,
  },
  miner: {
    name: "Miner",
    cost: 50,
    img: "miner.png",
    count: 0,
    add: 1,
  },
  pirate: {
    name: "Pirate",
    cost: 100,
    img: "pirate.png",
    count: 0,
    add: 5,
  },
  entrepreneur: {
    name: "Entrepreneur",
    cost: 200,
    img: "entrepreneur.png",
    count: 0,
    add: 10,
  },
  tycoon: {
    name: "Tycoon",
    cost: 500,
    img: "tycoon.png",
    count: 0,
    add: 20,
  },
  ceo: {
    name: "Ceo",
    cost: 1000,
    img: "ceo.png",
    count: 0,
    add: 50,
  },
  goldmine: {
    name: "Gold Mine",
    cost: 5000,
    img: "goldmine.png",
    count: 0,
    add: 100,
  }
}

function addGold() {
  gold += 1 * multiplyer
  drawGold()
  drawShop()
}

function drawGold() {
  document.getElementById("gold").innerText = gold
}
let shopKey = Object.keys(shop)

function drawShop() {
  let template = ""
  for (let i = 0; i < shopKey.length; i++) {
    let hide = ""
    let goods = shopKey[i]

    if (shop[goods].cost >= gold) { hide = "d-none" }

    template += `<div class=" col-md-6 d-flex justify-content-center align-items-center" >
    <img src="${shop[goods].img}" alt="${shop[goods]}" class="shop-img">
        <div>
        <h3>${shop[goods].name} x<span>3</span></h3>
        <h5>+ ${shop[goods].add} gold per second</h5>
        <h5 id="${goods}">Cost: ${shop[goods].cost}</h5>
        <button class="btn btn-success ${hide}" onclick="market('${goods}')">Purchase</button>
        </div>
      </div>`
  }
  document.getElementById("shop").innerHTML = template
}

function market(item) {
  switch (item) {
    case "pickaxe":
      gold -= shop.pickaxe.cost
      multiplyer *= 2
      shop.pickaxe.cost *= 3
    case "miner":
      gold -= shop.miner.cost
      shop[item].cost += 15
      shop.miner.count++
      auto += 1
      break;
    case "pirate":
      gold -= shop.pirate.cost
      shop.pirate.cost += 25
      shop.pirate.count++
      auto += 5
      break;
    case "entrepreneur":
      gold -= shop.entrepreneur.cost
      shop.entrepreneur.cost += 50
      shop.entrepreneur.count++
      auto += 10
      break;
    case "tycoon":
      gold -= shop.tycoon.cost
      shop.tycoon.cost += 250
      shop.tycoon.count++
      auto += 20
  }

}

function displayPurchase() {
  for (let i = 0; i < shopKey.length; i++) {
    let goods = shop[shopKey[i]]
    if (goods.cost >= gold) {
      return 0
      // document.getElementbyID("miner").classlist.add("d-none")
    }
    drawShop()
  }
}


function goldPerSecond() {
  gold += auto
  drawGold()

}

setInterval(goldPerSecond, 1000)

drawShop()
displayPurchase()
drawGold()