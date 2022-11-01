import { $submitButton, $result, $input } from "../utils/constant.js";

export default function SubmitButton(computerInputNumbers, play) {
  $submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    $result.innerHTML = play(computerInputNumbers, $input.value);
  });
}
