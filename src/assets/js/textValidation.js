export default function textValidation(text) {
  const reg_checker = /^[a-zA-Z\s]*$/;
  if (reg_checker.test(text) && text.length > 3 && text.length < 60) {
    console.log("text ", text, true);
    return true;
  } else {
    console.log("text ", text, false);
    return false;
  }
}
