let myDishes = ['Beefsteak', 'Baked Potatoes', 'Cheese Burger', 'Spaghetti Bolognese', 'Salat'];
// Deklariert ein Array namens `myDishes`, das die Namen der Gerichte enthält.

let prices = ['12,95', '8,75', '5,55', '6,87', '4,56'];
// Deklariert ein Array namens `prices`, das die Preise der Gerichte enthält.

let images = ['img/grilled-8042308_1280.jpg', 'img/potatoes-8600211_1280.jpg', 'img/ai-generated-8036255_1280.jpg', 'img/spaghetti-bolognese-7517639_1280.jpg', 'img/ai-generated-8406441_1280.png'];
// Deklariert ein Array namens `images`, das die Pfade zu den Bildern der Gerichte enthält.

let basketDishes = [];
let basketPrices = [];
let amounts = [];
// Deklariert drei Arrays: `basketDishes`, `basketPrices`, und `amounts`, um die ausgewählten Gerichte, deren Preise und die Mengen im Warenkorb zu speichern.

function init() {
  // Initialisiert die Hauptfunktion der App.

  let mainContainer = document.getElementById('mainContainer');
  // Holt das Element mit der ID `mainContainer`.

  mainContainer.innerHTML = getMainHtml();
  // Setzt den HTML-Inhalt des Hauptcontainers mit der `getMainHtml()`-Funktion.

  render();
  // Ruft die `render()`-Funktion auf, um die Gerichte darzustellen.

  renderBasket();
  // Ruft die `renderBasket()`-Funktion auf, um den Warenkorb darzustellen.
}

function render() {
  // Rendert die Gerichte.

  document.getElementById('dishes').innerHTML = '';
  // Setzt den HTML-Inhalt des Elements mit der ID `dishes` auf leer.

  for (let i = 0; i < myDishes.length; i++) {
    // Schleife, die durch die Gerichte läuft.

    let completeDishes = document.getElementById('dishes');
    // Holt das Element mit der ID `dishes`.

    completeDishes.innerHTML += getDishHtml(myDishes, images, i, prices);
    // Fügt das HTML für das aktuelle Gericht dem Container hinzu.
  }
}

function renderBasket() {
  // Rendert den Warenkorb.

  document.getElementById('addToBasket').innerHTML = '';
  // Setzt den HTML-Inhalt des Elements mit der ID `addToBasket` auf leer.
  //um den Warenkorb jedes Mal von Grund auf neu zu rendern.
  //Die Zeile leert den Warenkorb-Container.
  //Danach wird der Warenkorb mit den aktuellen Inhalten neu aufgebaut, um sicherzustellen, dass keine doppelten Einträge entstehen.

  for (let i = 0; i < basketDishes.length; i++) {
    // Schleife, die durch die Elemente im Warenkorb läuft.

    let completeBasket = document.getElementById('addToBasket');
    // Holt das Element mit der ID `addToBasket`.

    completeBasket.innerHTML += getBasketHtml(basketDishes, i, basketPrices, amounts);
    // Fügt das HTML für das aktuelle Element im Warenkorb hinzu.
  }

  calcSum();
  // Ruft die `calcSum()`-Funktion auf, um die Gesamtsumme zu berechnen.
}

function addToBasket(dish) {
  // Fügt ein Gericht zum Warenkorb hinzu.

  let dishIndex = myDishes.indexOf(dish);
  // Findet den Index des Gerichts im `myDishes`-Array.

  if (dishIndex === -1) {
    console.error('Dish not found:', dish);
    // Gibt eine Fehlermeldung aus, wenn das Gericht nicht gefunden wurde.

    return;
  }

  let basketIndex = basketDishes.indexOf(dish);
  // Findet den Index des Gerichts im `basketDishes`-Array.

  if (basketIndex === -1) {
    // Wenn das Gericht noch nicht im Warenkorb ist:

    basketDishes.push(dish);
    // Fügt das Gericht zum Warenkorb hinzu.

    basketPrices.push(prices[dishIndex]);
    // Fügt den entsprechenden Preis zum Warenkorb hinzu.

    amounts.push(1);
    // Setzt die Menge auf 1.
  } else {
    amounts[basketIndex]++;
    // Erhöht die Menge um 1, wenn das Gericht bereits im Warenkorb ist.
  }

  renderBasket();
  // Aktualisiert den Warenkorb.
}

function deleteFromBasket(dish) {
  // Entfernt ein Gericht aus dem Warenkorb.

  let basketIndex = basketDishes.indexOf(dish);
  // Findet den Index des Gerichts im `basketDishes`-Array.

  if (basketIndex !== -1) {
    // Wenn das Gericht im Warenkorb ist:

    amounts[basketIndex]--;
    // Verringert die Menge um 1.

    if (amounts[basketIndex] <= 0) {
      // Wenn die Menge 0 oder weniger ist:

      basketDishes.splice(basketIndex, 1);
      // Entfernt das Gericht aus dem `basketDishes`-Array.

      basketPrices.splice(basketIndex, 1);
      // Entfernt den Preis aus dem `basketPrices`-Array.

      amounts.splice(basketIndex, 1);
      // Entfernt die Menge aus dem `amounts`-Array.
    }

    renderBasket();
    // Aktualisiert den Warenkorb.
  }
}

function calcSum() {
  // Berechnet die Gesamtsumme des Warenkorbs.

  let sum = 0;
  // Initialisiert die Variable `sum` mit 0.

  for (let i = 0; i < basketPrices.length; i++) {
    // Schleife, die durch die Preise im Warenkorb läuft.

    sum += parseFloat(basketPrices[i].replace(',', '.')) * amounts[i];
    // Konvertiert den Preis in eine Zahl und multipliziert ihn mit der Menge, um die Zwischensumme zu berechnen.
  }

  document.getElementById('finalSum').innerHTML = sum.toFixed(2).replace('.', ',');
  // Setzt den HTML-Inhalt des Elements `finalSum` auf die berechnete Summe, formatiert auf zwei Dezimalstellen.
}

function showResponsiveBasket() {
  // Zeigt den Warenkorb im responsiven Modus an.

  let mainLeft = document.getElementById('mainLeft');
  mainLeft.classList.add('d-none');
  // Blendet das Element `mainLeft` aus.

  let mainRight = document.getElementById('mainRight');
  mainRight.classList.add('showResponsiveBasket');
  mainRight.classList.remove('d-none');
  mainRight.style.display = "flex";
  // Zeigt den Warenkorb an und passt die Darstellung an.
}

function returnButton() {
  // Blendet den Warenkorb aus und zeigt die Hauptseite an.

  let mainLeft = document.getElementById('mainLeft');
  mainLeft.classList.remove('d-none');
  // Zeigt das Element `mainLeft` an.

  let mainRight = document.getElementById('mainRight');
  mainRight.classList.remove('showResponsiveBasket');
  mainRight.classList.remove('d-none');
  // Entfernt Klassen, um die Ansicht anzupassen.

  if (window.innerWidth <= 768) {
    mainRight.style.display = "none";
    // Blendet `mainRight` aus, wenn die Bildschirmbreite kleiner oder gleich 768 Pixel ist.
  }
}

window.addEventListener("resize", function () {
  // Fügt einen Eventlistener hinzu, der bei Änderung der Fenstergröße ausgelöst wird.

  const mainRight = document.getElementById('mainRight');
  if (window.innerWidth > 1400) {
    mainRight.style.display = "flex";
    // Zeigt `mainRight` an, wenn die Fensterbreite größer als 1400 Pixel ist.
  } else {
    mainRight.style.display = "";
    // Setzt die Anzeige von `mainRight` zurück, wenn die Fensterbreite kleiner ist.
  }
});

function order() {
  // Führt eine Bestellung durch.

  let finalSum = parseFloat(document.getElementById('finalSum').innerText.replace(',', '.'));
  // Holt den Gesamtbetrag aus dem Element `finalSum` und konvertiert ihn in eine Zahl.

  let orderMessage = document.getElementById('orderMessage');
  // Holt das Element `orderMessage`.

  if (finalSum <= 0) {
    orderMessage.innerHTML = `Bestellung nicht möglich: Kein Artikel im Warenkorb.`;
    showMessage(orderMessage);
    // Zeigt eine Fehlermeldung an, wenn der Gesamtbetrag 0 oder weniger ist.
  } else {
    orderMessage.innerHTML = `Bestellung ist unterwegs`;
    showMessage(orderMessage);
    // Zeigt eine Erfolgsmeldung an, wenn eine Bestellung möglich ist.

    resetBasket();
    // Setzt den Warenkorb zurück.
  }
}

function showMessage(orderMessage) {
  // Zeigt eine Nachricht an und blendet sie nach 2 Sekunden aus.

  orderMessage.style.display = 'block';
  // Zeigt das Element `orderMessage` an.

  setTimeout(() => {
    orderMessage.innerHTML = '';
    orderMessage.style.display = 'none';
  }, 2000);
  // Blendet die Nachricht nach 2 Sekunden aus.
}

function resetBasket() {
  // Setzt den Warenkorb zurück.

  basketDishes = [];
  basketPrices = [];
  amounts = [];
  // Leert die Arrays `basketDishes`, `basketPrices` und `amounts`.

  renderBasket();
  // Aktualisiert den Warenkorb.

  if (window.innerWidth <= 768) {
    setTimeout(() => {
      returnButton();
    }, 2000);
    // Ruft die `returnButton()`-Funktion nach 2 Sekunden auf, wenn die Fensterbreite kleiner oder gleich 768 Pixel ist.
  }
}

function getMainHtml() {
  // Gibt das HTML für den Hauptcontainer zurück.

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
  // HTML-Code für die Hauptstruktur der Anwendung, einschließlich Gerichte und Warenkorb.
}

function getDishHtml(myDishes, images, i, prices) {
  // Gibt das HTML für ein einzelnes Gericht zurück.

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
  // HTML für die Darstellung eines einzelnen Gerichts, einschließlich Name, Bild, Preis und "In den Warenkorb"-Button.
}

function getBasketHtml(basketDishes, i, basketPrices, amounts) {
  // Gibt das HTML für ein einzelnes Element im Warenkorb zurück.

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
  // HTML für die Darstellung eines Elements im Warenkorb, einschließlich Name, Preis, Menge und Schaltflächen zur Anpassung der Menge.
}
