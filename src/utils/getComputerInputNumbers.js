export default function getComputerInputNumbers() {
  return [
    MissionUtils.Random.pickNumberInRange(1, 9),
    MissionUtils.Random.pickNumberInRange(1, 9),
    MissionUtils.Random.pickNumberInRange(1, 9),
  ].join("");
}
