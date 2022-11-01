export default function getComputerInputNumber() {
  return [
    MissionUtils.Random.pickNumberInRange(1, 9),
    MissionUtils.Random.pickNumberInRange(1, 9),
    MissionUtils.Random.pickNumberInRange(1, 9),
  ].join("");
}
