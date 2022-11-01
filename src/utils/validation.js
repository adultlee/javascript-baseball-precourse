export function getStrikeCount(computerInputNumbers, userInputNumbers) {
  let strikeCount = 0;
  for (let i = 0; i < 3; i++) {
    if (computerInputNumbers[i] === userInputNumbers[i]) {
      strikeCount++;
    }
  }
  return strikeCount;
}

export function getBallCount(computerInputNumbers, userInputNumbers) {
  let ballCount = 0;
  for (let i = 0; i < 3; i++) {
    if (
      computerInputNumbers.includes(userInputNumbers[i]) &&
      computerInputNumbers.indexOf(userInputNumbers[i]) !== i
    ) {
      ballCount++;
    }
  }
  return ballCount;
}

export function isNotCorrectInput(number) {
  if (number.length < 3 || number.length > 3) return true;
  if (isNaN(number)) return true;

  return false;
}
