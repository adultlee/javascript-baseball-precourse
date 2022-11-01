import { $result, $input } from "../utils/constant.js";
import BaseballGame from "../index.js";
export default function RestartButton() {
  $result.addEventListener("click", () => {
    $input.value = "";
    $result.innerHTML = "";
    new BaseballGame();
  });
}
