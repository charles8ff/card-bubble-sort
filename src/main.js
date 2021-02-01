/* eslint-disable */
import "bootstrap";
import "./style.css";
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

  GENERATE_BUTTON.addEventListener("click", () => {
    GENERATE_DIV.textContent = ""; //this cleans previous cards from the generate cards div
    CONTAINER_BUBBLE.textContent = ""; //this also cleans previous cards from the container of steps
    if (INPUT_CARD_NUMBER.value <= 30) {
      inputNumberfromUser = INPUT_CARD_NUMBER.value;
      arrayFromInput = Array.from({ length: inputNumberfromUser }, () =>
        generateCard()
      );

      for (let i = 0; i < arrayFromInput.length; i++) {
        newCard(arrayFromInput[i].number, arrayFromInput[i].suit); //new card only works in generate because of parents div
      }
    }
  });
  ORDER_BUTTON.addEventListener("click", () => {
    CONTAINER_BUBBLE.textContent = "";
    let h2ofBubbleSteps = document.createElement("H2");
    let textOfSteps = document.createTextNode("Card Bubble Sort Process");
    h2ofBubbleSteps.appendChild(textOfSteps);
    CONTAINER_BUBBLE.appendChild(h2ofBubbleSteps);
    // bubbleSort(arrayFromInput, arrayCardsSuits);
    bubbleSort(arrayFromInput);
  });
};

const randomNumber = () => Math.floor(Math.random() * CARD_HEIGHT.length); //pick a random valid number

const randomCardSuit = () => {
  //pick a random suit
  let randomSuits = Math.floor(Math.random() * CARD_SUIT.length);
  return CARD_SUIT[randomSuits];
};

const generateCard = () => {
  let oneCard = {
    number: randomNumber(),
    suit: randomCardSuit()
  };
  return oneCard;
};

const bubbleSort = arr => {
  //Our Bubble Sort Algorithm
  let len = arr.length;
  let stepsCounter = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j].number > arr[j + 1].number) {
        //swaps values
        let aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
      stepsCounter += 1;
      newRowofCard(arr, stepsCounter); //print the step
    }
  }
  return arr;
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
  GENERATE_DIV.appendChild(myNewCard);
};

const newRowofCard = (arr, numberOfStep) => {
  //   console.log("newrow");
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
  for (let i = 0; i < arr.length; i++) {
    bubbleSteps(arr[i], newRow);
  }
};

const bubbleSteps = (cardObj, newRow) => {
  //Prints steps of Bubble Sort algorithm (bubbleSort())
  //This is called inside newRowOfCards
  let myNewCard = document.createElement("div");
  myNewCard.classList.add("card", "shadow-lg");

  let cardTitle = document.createElement("div");
  cardTitle.classList.add("card-title", "d-flex", "ml-2", "mt-1");
  let suit1 = document.createElement("p");
  suit1.classList.add(cardObj.suit);

  let cardBody = document.createElement("div");
  cardBody.classList.add(
    "card-body",
    "d-flex",
    "align-items-center",
    "justify-content-center"
  );
  let number = document.createElement("p");
  let newtext = document.createTextNode(CARD_HEIGHT[cardObj.number]);
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
  suit2.classList.add(cardObj.suit, "reverse-p");

  cardTitle.appendChild(suit1);
  myNewCard.appendChild(cardTitle);
  cardBody.appendChild(number);
  myNewCard.appendChild(cardBody);
  cardFooter.appendChild(suit2);
  myNewCard.appendChild(cardFooter);
  newRow.appendChild(myNewCard);
};
