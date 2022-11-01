import getComputerInputNumbers from "./utils/getComputerInputNumbers.js";
import getStrikeCount from "./utils/getStrikeCount.js";
import getBallCount from "./utils/getBallCount.js";
import makeString from "./utils/makeString.js";
import isValidInput from "./utils/isValidInput.js";

export default function BaseballGame() {
  const computerInputNumbers = getComputerInputNumbers();
  const $submitButton = document.querySelector("#submit");
  const $input = document.querySelector("#user-input");
  const $result = document.querySelector("#result");
  const $restartButton = document.querySelector("#game-restart-button");

  this.play = function (computerInputNumbers, userInputNumbers) {
    console.log(computerInputNumbers);
    if (!isValidInput(userInputNumbers)) {
      alert("잘못된 입력입니다.");
      $input.value = "";
      $result.innerHTML = "";
    } else {
      const resultString = makeString(
        getBallCount(computerInputNumbers, userInputNumbers),
        getStrikeCount(computerInputNumbers, userInputNumbers)
      );
      return resultString;
    }
  };

  $submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    $result.innerHTML = this.play(computerInputNumbers, $input.value);
  });

  $result.addEventListener("click", (e) => {
    if (e.target.id === "game-restart-button") {
      $input.value = "";
      $result.innerHTML = "";
      new BaseballGame();
    }
  });

  $restartButton.addEventListener("click", (e) => {
    console.log("hi");
  });
}
new BaseballGame();
