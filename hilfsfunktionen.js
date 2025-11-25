function getMainHtml() {
  return `
  <div class="mainLeft" id="mainLeft">
      <div class="backgroundPictureHeadArea">
          <img class="atf-image" src="./img/beef-2509104_1280.jpg" />
      </div>
      <div class="favoriteDishes">
          <h2>beliebte Gerichte</h2>
          <a href="#Beefsteak">Beefsteak</a>
          <a href="#BakedPotatoes">Baked Potatoes</a>
          <a href="#CheeseBurger">Cheese Burger</a>
          <a href="#SpaghettiBolognese">Spaghetti Bolognese</a>
          <a href="#Salat">Salat</a>
      </div>
      <div class="dishes" id="dishes">
      </div>
  </div>    
  <div class="mainRight" id="mainRight">
      <div class="basket">
          <h3>Warenkorb</h3>
          <div id="addToBasket" class="basketDishes">
          </div>
          <div id="finalSum" class="subtotal">
              <button onclick="returnButton()">Zurück</button>
              <h3>Zwischensumme</h3>
          </div>
          <div class="order" onclick="order()">
              <h3>bestellen</h3>
          </div>
          <div class="orderOnTheWay" id="orderMessage" style="display: none;"></div>
      </div>
      <button id="order2" class="responsiveBasket" onclick="returnButton()">schliesse Warenkorb</button>
  </div>
  `;
}

function getDishHtml(myDishes, images, i, prices) {
  return `
  <div class="dishHeader" id="${myDishes[i].replace(' ', '')}">
      <div class="dishHeaderInfo">
          <h2>${myDishes[i]}</h2>
          <div class="addToBasketStyle">
              <h2>${prices[i]}</h2>
              <button class="dishesButton" onclick="addToBasket('${myDishes[i]}')">+</button>
          </div>
      </div>
      <img class="backgroundPictureAllDishes" src="${images[i]}">
      <div class="dishesPrice"></div>
  </div>
  `;
}

function getBasketHtml(basketDishes, i, basketPrices, amounts) {
  return `
  <div class="singleBasketElement">
      <div>${basketDishes[i]}</div>
      <div>${basketPrices[i]}</div>
      <div class="dishPriceAmount">
          <button class="BasketButtonMinusPlus" onclick="deleteFromBasket('${basketDishes[i]}')">-</button>
          <div>${amounts[i]}</div>
          <button class="BasketButtonMinusPlus" onclick="addToBasket('${basketDishes[i]}')">+</button>
      </div>
  </div>
  `;
}










function updateShoppingBasket() {
  let sum = 0;

  for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
  }
  let finalSum = sum + 4.95;                         //4.95 sind die Lieferkosten

  document.getElementById(IDwowirdiesummereinschribewollen).innerHTML = sum;

}


let dishes = {
  name: ['beef', 'brat', 'salat'],
  prices: [13.22, 6.56, 4.55]
}


function renderDishes() {
  let container = document.getElementById('container')
  for (let i = 0; i < dishes['name'].length; i++) {
    container.innerHTML += `
         <div>${dishes['name'][i]}</div>
         <div>${dishes['prices'][i]}</div>
           ` ;
  }
}


function addToBasket(i) {
  basketDishes.push(myDishes[i]);
  basketPrices.push(prices[i]);
}


function initArrays() {
  myList[0] = "No Banana";

  console.log(myList);
}



function insertDoors() {
  for (let i = 0; i < 24; i++) {  //mit for sagen wir das wir die nachfolgende Zeile 10 mal wiederholen wollen
    document.getElementById('body').innerHTML += `<div class="door"></div>`


  }
}

function aaaaaddToBasket() {
  document.getElementById('myDishes').innerHTML += ``;
}



for (let i = 0; i < myDishes.length; i++) {
  dishes += myDishes[i] + "<br>";
}


function onAddMenu() {                                  //array prices, wert von Funktion: getPriceFromInput wird ausgegeben
  if (getMenuIndex(getMenuFromInput()) == -1) {
    amounts.push(1);
    menus.push(getMenuFromInput());                   //array menus, wert von Funktion: getMenuFromInput wird ausgegeben
    prices.push(getPriceFromInput());                                          //if (index von refMenu -1 ist noch nicht in Array menus)                                                       //else amounts +1    

  }

  else {
    amounts[getMenuIndex(getMenuFromInput())]++;
  }
}


//for (let i = 0; i < myDishes.length; i++) {
//  dishes += myDishes[i] + "<br>";
//}


//index off 

let names = ['albert', 'moses', 'cesar']
console.log(names);
console.log(names[1]);
console.log(names.indexOf('cain'));
if (names.indexOf('cain') == -1) {
  let cain = "cain"
  names.push(cain)
  console.log(names.indexOf('cain'))
}



<div class="dishPriceAmount">
  <div><i class="fa fa-minus"></i></div>
  <div>${amounts[i]}</div>
  <div><i class="fa fa-plus"></i></div>
</div>




let discount = 50;
let price = 50;

logCalculatePrice(50, 400);

logCalculatePrice(50, 300);


logCalculatePrice();

function logCalculatePrice(discount, price) {
  console.log((price - discount - discount) * 1.19);

}



if (theDish1.checked == true) {
  totalPriceDish1 = quantity * dishPrice;
}

return totalPriceDish1;


if (basketDishes.indexOf('Beefsteak') == -1) {         //Wenn Beafsteak 2x 3x 4x im Warenkorb, dann soll nur die Anzahl dahinter angezeigt werden
  let Beefsteak = 'Beefsteak'
  amounts.push('Beefsteak')

} else {

}



//for (let i = 0; i < myDishes.length; i++) {
//  dishes += myDishes[i] + "<br>";
//}

//reinrendert
//preise zusammenrechnet plusminus

//function addToBasket(name, price) {
//names.push(name);
//prices.push(price);

//}


// let names = ['albert', 'moses', 'cesar']
// console.log(names);
// console.log(names[1]);
// console.log(names.indexOf('cain'));
// if (names.indexOf('cain') == -1) {
//   let cain = "cain"
//   names.push(cain)
//   console.log(names.indexOf('cain'))
// }


function addToBasket(dish) {
  let dishIndex = myDishes.indexOf(dish); // Findet den Index des Gerichts im Array myDishes
  if (dishIndex === -1) { // Wenn das Gericht nicht gefunden wird (Index -1), wird ein Fehler protokolliert
    console.error('Dish not found:', dish);
    return;
  }

  let basketIndex = basketDishes.indexOf(dish); // Findet den Index des Gerichts im Warenkorb
  if (basketIndex === -1) { // Wenn das Gericht nicht im Warenkorb ist (Index -1)
    basketDishes.push(dish); // Das Gericht wird zum Warenkorb hinzugefügt
    basketPrices.push(prices[dishIndex]); // Der entsprechende Preis wird zum Warenkorb hinzugefügt
    amounts.push(1); // Die Menge des Gerichts wird auf 1 gesetzt
  } else { // Wenn das Gericht bereits im Warenkorb ist
    amounts[basketIndex]++; // Die Menge des Gerichts wird um 1 erhöht
  }
  renderBasket(); // Der Warenkorb wird neu gerendert
}


