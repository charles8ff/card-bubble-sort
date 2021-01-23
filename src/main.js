/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
const CARD_HEIGHT = [
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
const CARD_SUIT = ["heart", "diamond", "spade", "club"];
const GENERATE_BUTTON = document.querySelector("#generateCards");
const ORDER_BUTTON = document.querySelector("#orderbutton");
const INPUT_CARD_NUMBER = document.querySelector("#inputCards");
const GENERATE_DIV = document.querySelector("#createDivCard");
const CONTAINER_BUBBLE = document.querySelector("#container-bubble");

window.onload = () => {
  let inputNumberfromUser = 0;
  let arrayFromInput = [];
  let arrayCardsHeight = [];
  let arrayCardsSuits = [];

  GENERATE_BUTTON.addEventListener("click", () => {
    console.log(INPUT_CARD_NUMBER.value);
    GENERATE_DIV.textContent = ""; //this cleans previous cards from the generate cards div
    CONTAINER_BUBBLE.textContent = ""; //this also cleans previous cards from the container of steps
    if (INPUT_CARD_NUMBER.value <= 30) {
      inputNumberfromUser = INPUT_CARD_NUMBER.value;
      arrayFromInput = Array.from({ length: inputNumberfromUser }, () =>
        randomNumbers()
      );
      arrayCardsSuits = [];
      arrayCardsSuits = Array.from({ length: inputNumberfromUser }, () =>
        randomCardSuits()
      );
      arrayCardsHeight = [];
      for (let i = 0; i < arrayFromInput.length; i++) {
        arrayCardsHeight.push(CARD_HEIGHT[arrayFromInput[i]]);
      }

      for (let i = 0; i < arrayFromInput.length; i++) {
        newCard(arrayCardsHeight[i], arrayCardsSuits[i]);
      }
    }
  });
  ORDER_BUTTON.addEventListener("click", () => {
    CONTAINER_BUBBLE.textContent = "";
    var h = document.createElement("H2");
    var t = document.createTextNode("Card Bubble Sort Process");
    h.appendChild(t);
    CONTAINER_BUBBLE.appendChild(h);
    bubbleSort(arrayFromInput, arrayCardsSuits);
    arrayCardsHeight = [];
    for (let i = 0; i < arrayFromInput.length; i++) {
      arrayCardsHeight.push(CARD_HEIGHT[arrayFromInput[i]]);
    }
  });
};
const randomNumbers = () => Math.floor(Math.random() * CARD_HEIGHT.length); //pick a random valid number
const randomCardSuits = () => {
  //pick a random suit
  let randomSuits = Math.floor(Math.random() * CARD_SUIT.length);
  return CARD_SUIT[randomSuits];
};
const newCard = (arrNumber, arrSuits) => {
  //New Card Printed
  let myNewCard = document.createElement("div");
  myNewCard.classList.add("card", "shadow-lg");
  let cardTitle = document.createElement("div");
  cardTitle.classList.add("card-title", "d-flex", "ml-2", "mt-1");
  let suit1 = document.createElement("p");
  suit1.classList.add(arrSuits);

  let cardBody = document.createElement("div");
  cardBody.classList.add(
    "card-body",
    "d-flex",
    "align-items-center",
    "justify-content-center"
  );
  let number = document.createElement("p");
  let newtext = document.createTextNode(arrNumber);
  number.appendChild(newtext);

  let cardFooter = document.createElement("div");
  cardFooter.classList.add(
    "card-footer",
    "bg-transparent",
    "border-top-0",
    "d-flex",
    "ml-5",
    "justify-content-end"
  );
  let suit2 = document.createElement("p");
  suit2.classList.add(arrSuits, "reverse-p");
  cardTitle.appendChild(suit1);
  myNewCard.appendChild(cardTitle);
  cardBody.appendChild(number);
  myNewCard.appendChild(cardBody);
  cardFooter.appendChild(suit2);
  myNewCard.appendChild(cardFooter);
  GENERATE_DIV.appendChild(myNewCard);
};
const bubbleSort = (arr, arrsuits) => {
  //Our Bubble Sort Algorithm
  let len = arr.length;
  let stepsCounter = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //swaps in the numbers array
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        //mirrors swap in Suits array
        let temp2 = arrsuits[j];
        arrsuits[j] = arrsuits[j + 1];
        arrsuits[j + 1] = temp2;
      }
      stepsCounter += 1;
      newRowofCard(arr, arrsuits, stepsCounter); //print the step
    }
  }
  return arr, arrsuits;
};

const newRowofCard = (arr, arrsuits, numberOfStep) => {
  //Adds a new row for the bubbleSort to be printed
  let newRow = document.createElement("div");
  newRow.classList.add(
    "d-flex",
    "flex-row",
    "flex-wrap",
    "border",
    "border-danger",
    "rounded",
    "bubbleCard"
  );
  CONTAINER_BUBBLE.appendChild(newRow);
  let createPofSteps = document.createElement("p");
  let numberOfP = document.createTextNode(numberOfStep);
  createPofSteps.appendChild(numberOfP);
  createPofSteps.classList.add("steps-number");
  newRow.appendChild(createPofSteps);
  for (let b = 0; b < arr.length; b++) {
    bubbleSteps(arr[b], arrsuits[b], newRow);
  }
};

const bubbleSteps = (arrNumber, arrSuits, newRow) => {
  //Prints steps of Bubble Sort algorithm (bubbleSort())
  //This is called inside newRowOfCards
  let myNewCard = document.createElement("div");
  myNewCard.classList.add("card", "shadow-lg");

  let cardTitle = document.createElement("div");
  cardTitle.classList.add("card-title", "d-flex", "ml-2", "mt-1");
  let suit1 = document.createElement("p");
  suit1.classList.add(arrSuits);

  let cardBody = document.createElement("div");
  cardBody.classList.add(
    "card-body",
    "d-flex",
    "align-items-center",
    "justify-content-center"
  );
  let number = document.createElement("p");
  let newtext = document.createTextNode(CARD_HEIGHT[arrNumber]);
  number.appendChild(newtext);

  let cardFooter = document.createElement("div");
  cardFooter.classList.add(
    "card-footer",
    "bg-transparent",
    "border-top-0",
    "d-flex",
    "ml-5",
    "justify-content-end"
  );
  let suit2 = document.createElement("p");
  suit2.classList.add(arrSuits, "reverse-p");

  cardTitle.appendChild(suit1);
  myNewCard.appendChild(cardTitle);
  cardBody.appendChild(number);
  myNewCard.appendChild(cardBody);
  cardFooter.appendChild(suit2);
  myNewCard.appendChild(cardFooter);
  newRow.appendChild(myNewCard);
};
