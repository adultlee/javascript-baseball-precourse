export default function makeString(ballCount, strikeCount) {
  let resultString = "";

  if (ballCount === 0 && strikeCount === 0) return "낫싱";
  if (strikeCount === 3)
    return `정답을 맞췄습니다 <br/> 게임을 다시 플레이하시겠습니까? <br/><button id="game-restart-button">재시작</button>`;
  if (ballCount > 0) resultString += `${ballCount}볼`;
  if (strikeCount > 0) resultString += ` ${strikeCount} 스트라이크`;

  return resultString;
}
