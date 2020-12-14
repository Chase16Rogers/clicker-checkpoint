
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
  setTimeout(() => {
    gold += 1 * multiplyer
    drawGold()
    displayPurchase()
  }, 5)
}

function drawGold() {
  document.getElementById("gold").innerText = gold
  displayPurchase()
}
let shopKey = Object.keys(shop)


function drawShop() {
  let template = ""
  for (let i = 0; i < shopKey.length; i++) {
    let goods = shopKey[i]
    let goodName = shop[goods].name
    let goodButt = goods
    let goodButtId = goods + "butt"
    template += `<div class=" col-md-6 d-flex justify-content-center align-items-center" >
    <img src="${shop[goods].img}" alt="${shop[goods]}" class="shop-img">
    <div>
        <h3>${shop[goods].name} x<span id="${goodName + 'count'}">${shop[goods].count}</span></h3>
        <h5 id="diff">+ ${shop[goods].add} gold per second</h5>
        <h5 >Cost: <span id="${goodName + "cost"}">${shop[goods].cost}</span> gold</h5>
        <button id="${goodButtId}" class="btn bg-maroon text-gold d-none" onclick="market('${goodButt}')">Purchase</button>
        </div>
        </div>`
    if (gold >= shop[goods].cost) { }
  }
  document.getElementById("shop").innerHTML = template

}

function market(item) {
  switch (item) {
    case "pickaxe":
      gold -= shop.pickaxe.cost
      multiplyer *= 2
      shop.pickaxe.cost *= 3
    default:
      if (gold >= shop[item].cost) {
        gold -= shop[item].cost
        shop[item].cost += Math.floor(shop[item].cost / 4)
        shop[item].count++
        auto += shop[item].add
      }
      break;
  }
  if (shop[item].cost >= gold) {
    document.getElementById(item + 'butt').classList.add("d-none")
  }
  document.getElementById(shop[item].name + 'cost').innerText = shop[item].cost
  document.getElementById(shop[item].name + 'count').innerText = shop[item].count
  document.getElementById("goldps").innerText = auto
  document.getElementById("goldpc").innerText = multiplyer
  if (item == "pickaxe") { document.getElementById("diff").innerText = "x 2 gold per click" }
  drawGold()
  displayPurchase()
}


function displayPurchase() {
  let hider = "d-none"
  for (let i = 0; i < shopKey.length; i++) {
    let good = shopKey[i]
    let upgradeName = shop[good].name
    let upgradeCost = shop[good].cost
    let upgradeCount = shop[good].count
    if (upgradeCost <= gold) {
      document.getElementById(good + "butt").classList.remove("d-none")
    } else {
      document.getElementById(good + "butt").classList.add("d-none")
    }
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