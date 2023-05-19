const body = document.body;

const button = document.createElement("BUTTON");
button.innerText = "Generar carta";
button.style.background = "white";
button.style.color = "black";

button.addEventListener("click", () => {
  cardGenerator();
});

body.append(button);

// Función generadora de la carta
function cardGenerator() {
  // Creacion de la carta base con sus partes
  const card = document.createElement("DIV");
  card.classList.add("card");
  body.append(card);

  const cardSuitTop = document.createElement("DIV");
  const cardNumberPosition = document.createElement("DIV");
  const cardSuitBottom = document.createElement("DIV");
  cardSuitTop.classList.add("cardSuitTop");
  cardSuitBottom.classList.add("cardSuitBottom");
  cardNumberPosition.classList.add("cardNumberPosition");
  card.append(cardSuitTop);
  card.append(cardNumberPosition);
  card.append(cardSuitBottom);

  const cardSuitP1 = document.createElement("P");
  const cardSuitP2 = document.createElement("P");
  const cardNumber = document.createElement("P");
  cardSuitTop.append(cardSuitP1);
  cardSuitBottom.append(cardSuitP2);
  cardNumberPosition.append(cardNumber);

  // Variables de números y palos para las cartas
  const hearts = "♥";
  const spades = "♠";
  const clubs = "♣";
  const diamonds = "♦";
  const cardSuits = [hearts, spades, clubs, diamonds];
  const cardNumbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  // Asignación de número y palo a la carta
  cardSuitP1.innerHTML =
    cardSuits[Math.floor(Math.random() * cardSuits.length)];

  cardSuitP2.innerHTML = cardSuitP1.innerHTML;

  cardNumber.innerHTML =
    cardNumbers[Math.floor(Math.random() * cardNumbers.length)];

  cardSuitP1.innerHTML == hearts || cardSuitP1.innerHTML == diamonds
    ? cardSuitP1.classList.add("red")
    : cardSuitP1.classList.add("black");

  cardSuitP2.innerHTML == hearts || cardSuitP2.innerHTML == diamonds
    ? cardSuitP2.classList.add("red")
    : cardSuitP2.classList.add("black");

  cardSuitP2.innerHTML == hearts || cardSuitP2.innerHTML == diamonds
    ? cardNumber.classList.add("red")
    : cardNumber.classList.add("black");
}

//cardGenerator();
