export default function getBallCount(computerInputNumbers, userInputNumbers) {
  let ballCount = 0;

  for (let i = 0; i < 3; i++) {
    if (computerInputNumbers[i] !== userInputNumbers[i]) {
      if (userInputNumbers.includes(computerInputNumbers[i])) ballCount++;
    }
  }
  return ballCount;
}
