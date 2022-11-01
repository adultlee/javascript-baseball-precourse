import getComputerInputNumber from "./utils/getComputerInputNumber.js";
import makeResultString from "./utils/makeResultString.js";
import SubmitButton from "./components/SubmitButton.js";
import RestartButton from "./components/ReStartButton.js";

export default function BaseballGame() {
  let computerInputNumbers = getComputerInputNumber();

  this.play = function (computerInputNumbers, userInputNumbers) {
    return makeResultString(computerInputNumbers, userInputNumbers);
  };

  new SubmitButton(computerInputNumbers, this.play);

  new RestartButton();
}

new BaseballGame();
