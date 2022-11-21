"use strict";
import { checkTimeoutForModalWindow, closeModalWindow, showModalWindow, timeoutForModalWindow } from "./modal";

const quotes = [
  {
    name: "Уолт Дисней",
    quote: "Все наши мечты могут стать реальностью, если у нас хватит смелости следовать им до конца.",
  },
  {
    name: "Микки Маус",
    quote: "Смеяться над собой – значит любить себя.",
  },
  {
    name: "Дори",
    quote: "Знаешь, что надо делать, когда жизнь наносит новый удар? Просто плыть дальше!",
  },
  {
    name: "Золушка",
    quote: "Как бы сильно твое сердце ни страдало, если ты будешь верить, твоя мечта обязательно сбудется!",
  },
  {
    name: "Белоснежка",
    quote: "Когда нужно сделать очень много работы, не позволяй ей обеспокоить тебя. Забудь о своих проблемах!",
  },
  {
    name: "Геркулес",
    quote:
      "Я на своем пути. Я могу пройти его. Не важно, насколько он долгий. Я знаю, что мне хватит сил. Каждая миля стоит моих стараний. Я готов пойти куда угодно, чтобы понять, где мое место в этом мире",
  },
  {
    name: "Геркулес",
    quote:
      "Я на своем пути. Я могу пройти его. Не важно, насколько он долгий. Я знаю, что мне хватит сил. Каждая миля стоит моих стараний. Я готов пойти куда угодно, чтобы понять, где мое место в этом мире",
  },
  {
    name: "Аладдин",
    quote:
      "Не позволяй его заурядному виду сбить тебя с толку. Как и многие вещи, внутри он не такой, каким кажется снаружи",
  },
  {
    name: "Олаф",
    quote: "Некоторые люди достойны того, чтобы растаять ради них",
  },
  {
    name: "Карлсон",
    quote: "Я мужчина хоть куда! Я — умный, красивый, в меру упитанный мужчина в полном расцвете сил.",
  },
  {
    name: "Кот Матроскин",
    quote: "В такую погоду свои дома сидят, телевизор смотрют. Только чужие шастают. Не будем дверь открывать!",
  },
  {
    name: "Ослик Иа",
    quote: "Немного внимания, немного заботы об остальных способны изменить все",
  },
  {
    name: "Карлсон",
    quote: "Спокойствие, только спокойствие!",
  },
  {
    name: "Жаба из м/ф Дюймовочка",
    quote: "Поели — теперь можно и поспать! Поспали — теперь можно и поесть…",
  },
  {
    name: "Чебурашка",
    quote: "Гена, а давай я вещи понесу, а ты возьми меня.",
  },
  {
    name: "Винни-Пух",
    quote: "Не очень-то вежливо уходить из гостей сразу, как только ты наелся.",
  },
];

function renderQuote(obj) {
  const quotesDiv = document.querySelector("#quotes-div");
  const quoteEl = document.createElement("p");
  const nameEl = document.createElement("span");
  quoteEl.classList.add("general__quote");
  nameEl.classList.add("general__name");
  quoteEl.textContent = obj.quote;
  nameEl.textContent = obj.name;
  quotesDiv.innerHTML = "";
  quotesDiv.append(quoteEl);
  quotesDiv.append(nameEl);
}

//? let previousEl;

//? function randomQuote(arr) {
//?   i = Math.floor(Math.random() * arr.length);
//?  console.log(i);
//?   if (i !== previousEl) {
//?     previousEl = i;
//?     return (obj = arr[i]);
//?   } else {
//?  randomQuote(arr)
//?   }
//? }

function randomQuote(arr) {
  obj = arr[Math.floor(Math.random() * arr.length)];
  return obj;
}

export let quoteIsStarted = false;
let startRandomQuote;

function onButtonStartClick(evt) {
  evt.preventDefault();
  checkTimeoutForModalWindow();
  if (!quoteIsStarted) {
    startRandomQuote = setInterval(() => {
      const obj = randomQuote(quotes);
      renderQuote(obj);
    }, 100);
    quoteIsStarted = true;
  }
}

function onButtonStopClick(evt) {
  evt.preventDefault();
  if (quoteIsStarted) {
    clearInterval(startRandomQuote);
    quoteIsStarted = false;
  }
}

const buttonStart = document.querySelector("#button-start");

buttonStart.addEventListener("click", onButtonStartClick);

const buttonStop = document.querySelector("#button-stop");

buttonStop.addEventListener("click", onButtonStopClick);
