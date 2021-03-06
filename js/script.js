const generateID = document.querySelector("#create_generator");
const containerResults = document.querySelector(".container__resultsID");
const startValue = document.querySelector("#start__value");
const up = document.querySelector("#up");
const down = document.querySelector("#down");
let txt = document.querySelector(".txt");
let text = document.querySelector(".text");

// Generator Id
function* createIdGenerator() {
  for (let i = 0; i <= Infinity; i++) yield i;
}
const idGenerator = createIdGenerator();
generateID.addEventListener("click", () => {
  containerResults.innerHTML = `${idGenerator.next().value}.`;
});

let size;
let defaultFont = 14;
function* newFontGenerator() {
  while (true) {
    size === true ? yield (defaultFont += 2) : yield (defaultFont -= 2);
  }
}

const fontGenerator = newFontGenerator();
startValue.addEventListener("click", () => {
  txt.style.fontSize = "14px";
  text.innerHTML ='';
});

up.addEventListener("click", () => {
  size = true;
  txt.style.fontSize = `${fontGenerator.next().value}px`;
  text.innerHTML ='';
});

down.addEventListener("click", () => {
  size = false;
  if (defaultFont >= 1) {
    txt.style.fontSize = `${fontGenerator.next().value}px`;
  } else if (defaultFont <= 0) {
    txt.style.fontSize = "1px";
    text.innerHTML = `The smallest font size is 1px`;
  }
});
