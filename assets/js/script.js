const selectBox = document.querySelector(".select-box");

const selectXBtn = selectBox.querySelector(".playerX");

const selectOBtn = selectBox.querySelector(".playerO");
const playBoard = document.querySelector(".play-board");
const allBox = document.querySelectorAll("section span");

const player = document.querySelector(".player");

// console.log(selectBox, SelectXBtn, SelectOBtn);

// função para carregamento / iteração com os spans / add classes
window.onload = () => {
  for (let i = 0; i < allBox.length; i++) {
    allBox[i].setAttribute("onclick", "clickBox(this)");
  }

  selectXBtn.onclick = () => {
    selectBox.classList.add("hide");
    playBoard.classList.add("show");
  };

  selectOBtn.onclick = () => {
    selectBox.classList.add("hide");
    playBoard.classList.add("show");
    player.setAttribute("class", "player active players");
  };
};

// função para jogador
let playerXIcon = "fas fa-times";
let playerOIcon = "far fa-circle";

function clickBox(element) {
  if (player.classList.contains("player")) {
    element.innerHTML = `<i class="${playerOIcon}" ></i>`;
    player.classList.add("active");
  } else {
    element.innerHTML = `<i class="${playerXIcon}" ></i>`;
    player.classList.add("active");
  }
  element.style.pointerEvents = "none";

  bot();
}

// Função para o Bot

function bot() {
  let array = [];
  for (let i = 0; i < allBox.length; i++) {
    if (allBox[i].childElementCount == 0) {
      array.push(i);
    }
  }

  let randomBox = array[Math.floor(Math.random() * array.length)];

  if (array.length > 0) {
    if (player.classList.contains("player")) {
      allBox[randomBox].innerHTML = `<i class="${playerXIcon}" ></i>`;
      player.classList.add("active");
    } else {
      allBox[randomBox].innerHTML = `<i class="${playerOIcon}" ></i>`;
      player.classList.add("active");
    }
  }
}
