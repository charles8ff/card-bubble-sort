/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
const bubbleSort = arr => {
  let wall = arr.length - 1; //we start the wall at the end of the array
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      //compare the adjacent positions, if the right one is bigger, we have to swap
      if (arr[index] > arr[index + 1]) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }
      index++;
    }
    console.log(arr);
    wall--; //decrease the wall for optimization
  }
  return arr;
};

const cardHeight = [
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

const randomNumbers = () => Math.floor(Math.random() * cardHeight.length);
const generateButton = document.querySelector("#generateCards");
const orderButton = document.querySelector("#orderbutton");
const inputCards = document.querySelector("#inputCards");
const divElem = document.querySelector("#createDivCard");

const randomCardSuits = () => {
  const arraySuits = ["heart", "diamond", "spade", "club"];
  let randomSuits = Math.floor(Math.random() * arraySuits.length);
  return arraySuits[randomSuits];
};

const newCard = (arrNumber, arrSuits) => {
  var myNewCard = document.createElement("div");
  myNewCard.classList.add("card", "shadow-lg");
  var cardTitle = document.createElement("div");
  cardTitle.classList.add("card-title", "d-flex", "ml-2", "mt-1");
  var suit1 = document.createElement("p");
  suit1.classList.add(arrSuits);

  var cardBody = document.createElement("div");
  cardBody.classList.add(
    "card-body",
    "d-flex",
    "align-items-center",
    "justify-content-center"
  );
  var number = document.createElement("p");
  var newtext = document.createTextNode(arrNumber);
  number.appendChild(newtext);

  var cardFooter = document.createElement("div");
  cardFooter.classList.add(
    "card-footer",
    "bg-transparent",
    "border-top-0",
    "d-flex",
    "ml-5",
    "justify-content-end"
  );
  var suit2 = document.createElement("p");
  suit2.classList.add(arrSuits, "reverse-p");

  cardTitle.appendChild(suit1);
  myNewCard.appendChild(cardTitle); // UNIMOS TITLE A LA CARD
  cardBody.appendChild(number);
  myNewCard.appendChild(cardBody);
  cardFooter.appendChild(suit2);
  myNewCard.appendChild(cardFooter);
  divElem.appendChild(myNewCard);
};

window.onload = () => {
  let inputNumberfromUser = 0;
  let arrayFromInput; //luego quitar
  let arrayCards = [];
  let arrayCardSuits = [];
  generateButton.addEventListener("click", () => {
    inputNumberfromUser = inputCards.value;
    arrayFromInput = Array.from({ length: inputNumberfromUser }, () =>
      randomNumbers()
    );
    arrayCardSuits = [];
    arrayCardSuits = Array.from({ length: inputNumberfromUser }, () =>
      randomCardSuits()
    );
    //console.log(arrayFromInput);
    arrayCards = [];
    for (let i = 0; i < arrayFromInput.length; i++) {
      arrayCards.push(cardHeight[arrayFromInput[i]]);
      //newCard(arrayCards, arrayCardSuits);
    }

    for (let i = 0; i < arrayFromInput.length; i++) {
      //arrayCards.push(cardHeight[arrayFromInput[i]]);
      newCard(arrayCards[i], arrayCardSuits[i]);
    }
    //console.log
    //console.log(arrayCardSuits);
    //console.log(arrayFromInput);
    //console.log(arrayCards);
  });
  orderButton.addEventListener("click", () => {
    bubbleSort(arrayFromInput);
    arrayCards = [];
    for (let i = 0; i < arrayFromInput.length; i++) {
      arrayCards.push(cardHeight[arrayFromInput[i]]);
    }
    console.log(arrayFromInput);
    console.log(arrayCards);
  });
};

// //  console.log(inputNumberfromUser);
// let arrayFromInput = Array.from({ length: inputNumberfromUser }, () =>
//   randomNumbers()
// );
// //console.log(arrayFromInput);
// let arraySorted = bubbleSort(arrayFromInput);
// console.log(arraySorted);
// console.log(randomNumbers);
