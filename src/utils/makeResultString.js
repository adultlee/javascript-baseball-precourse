import {
  getBallCount,
  getStrikeCount,
  isNotCorrectInput,
} from "./validation.js";

export default function makeResultString(
  computerInputNumbers,
  userInputNumbers
) {
  if (isNotCorrectInput(userInputNumbers)) {
    alert("잘못된 입력입니다");
  } else {
    console.log(userInputNumbers + " " + computerInputNumbers);
    const ballCount = getBallCount(computerInputNumbers, userInputNumbers);
    const strikeCount = getStrikeCount(computerInputNumbers, userInputNumbers);
    const resultString = [];
    if (ballCount === 0 && strikeCount === 0) resultString.push("낫싱");
    if (ballCount > 0) resultString.push(`${ballCount}볼 `);
    if (0 < strikeCount && strikeCount < 3)
      resultString.push(`${strikeCount}스트라이크`);
    if (strikeCount === 3) {
      return `<h3>🎉 정답을 맞추셨습니다. 🎉</h3>
    <p>게임을 새로 시작하시겠습니까?<button id="game-restart-button">재시작</button></p>`;
    }

    return resultString.join("");
  }
}
