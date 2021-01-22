/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
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
const divBubble = document.querySelector("#createDivBubble");
const divContainer = document.querySelector("#container");

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
    // console.log(arrayFromInput);
  });
  orderButton.addEventListener("click", () => {
    bubbleSort(arrayFromInput, arrayCardSuits);
    arrayCards = [];
    for (let i = 0; i < arrayFromInput.length; i++) {
      arrayCards.push(cardHeight[arrayFromInput[i]]);
    }
    // console.log(arrayFromInput);
    // console.log(arrayCards);
  });
};

const newRowofCard = (arr, arrsuits) => {
  var newRow = document.createElement("div");
  newRow.classList.add("d-flex", "flex-row", "flex-wrap");
  divContainer.appendChild(newRow);
  for (var b = 0; b < arr.length; b++) {
    //console.log(arr[b]);
    bubbleLog(arr[b], arrsuits[b], newRow);
  }
};

const bubbleSort = (arr, arrsuits) => {
  var len = arr.length;

  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        //SUITS
        var temp2 = arrsuits[j];
        arrsuits[j] = arrsuits[j + 1];
        arrsuits[j + 1] = temp2;
      }
      newRowofCard(arr, arrsuits);
      //   console.log(arr);
      //   for (var b = 0; b < arr.length; b++) {
      //     //console.log(arr[b]);
      //     // bubbleLog(arr[b], arrsuits[b]);
      //   }
      //   var newRow = document.createElement("div");
      //   newRow.classList.add("d-flex", "flex-row", "flex-wrap");
      //   divContainer.appendChild(newRow);
    }
  }
  return arr, arrsuits;
};

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

const bubbleLog = (arrNumber, arrSuits, newRow) => {
  var myNewCard = document.createElement("div");
  myNewCard.classList.add("card", "shadow-lg", "col-1");
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
  var newtext = document.createTextNode(cardHeight[arrNumber]);
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
  newRow.appendChild(myNewCard);
};
