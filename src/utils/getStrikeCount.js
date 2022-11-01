export default function getStrikeCount(computerInputNumbers, userInputNumbers) {
  let strikeCount = 0;
  for (let i = 0; i < 3; i++) {
    if (computerInputNumbers[i] === userInputNumbers[i]) {
      strikeCount++;
    }
  }
  return strikeCount;
}
