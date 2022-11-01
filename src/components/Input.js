import { isCorrectNumber } from "../utils/validation.js";
import { $input } from "../utils/constant.js";
export default function Input() {
  $input.addEventListener("keyup", (e) => {
    if (!isCorrectNumber(e.key)) {
      alert("잘못된 값입니다.");
      $input.value = "";
    }
  });
}
