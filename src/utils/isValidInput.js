export default function isValidInput(number) {
  if (number.length !== 3) return false;
  if (isNaN(number)) return false;
  return true;
}
