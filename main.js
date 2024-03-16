const p1 = {
  playerValue: 0,
  plusOnePlayer: document.querySelector("#plus1-player1"),
  display: document.querySelector("#player1"),
};
const p2 = {
  playerValue: 0,
  plusOnePlayer: document.querySelector("#plus1-player2"),
  display: document.querySelector("#player2"),
};

const resetBtn = document.querySelector("#reset-value");
const matchNumber = document.querySelector("#set-match");
let isGameOver = false;
let winningScore = 5;

const updateScores = (player, oponent) => {
  if (!isGameOver) {
    player.playerValue += 1;
    player.display.textContent = player.playerValue;
    if (player.playerValue === winningScore) {
      player.display.classList.add("winner");
      oponent.display.classList.add("loser");
      player.plusOnePlayer.disabled = true;
      oponent.plusOnePlayer.disabled = true;
      isGameOver = true;
    }
  }
};

const resetF = () => {
  isGameOver = false;
  [p1, p2].forEach((p) => {
    p.playerValue = 0;
    p.display.textContent = p.playerValue;
    p.display.classList.remove("winner", "loser");
    p.plusOnePlayer.disabled = false;
  });
};

matchNumber.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  resetF();

  console.log(winningScore);
});

p1.plusOnePlayer.addEventListener("click", (e) => {
  e.preventDefault();
  updateScores(p1, p2);
});

p2.plusOnePlayer.addEventListener("click", (e) => {
  e.preventDefault();
  updateScores(p2, p1);
});

resetBtn.addEventListener("click", () => {
  resetF();
});
