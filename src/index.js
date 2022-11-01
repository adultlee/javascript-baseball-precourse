import getComputerInputNumber from "./utils/getComputerInputNumber.js";
import makeResultString from "./utils/makeResultString.js";
import SubmitButton from "./components/SubmitButton.js";
import RestartButton from "./components/ReStartButton.js";

export default function BaseballGame() {
  const computerInputNumbers = getComputerInputNumber();

  this.play = function (computerInputNumbers, userInputNumbers) {
    return makeResultString(computerInputNumbers, userInputNumbers);
  };

  this.setComputerInputNumbers = () => {
    new SubmitButton(getComputerInputNumber(), this.play);
  };

  new SubmitButton(computerInputNumbers, this.play);

  new RestartButton(this.setComputerInputNumbers);
}

new BaseballGame();
