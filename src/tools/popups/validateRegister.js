import { validationPhone } from "../helper";

const validatingRegister = (value) => {
  const errorText = {};
  if (!value.phone) {
    errorText.phone = "validRequiredPhone";
  } else if (validationPhone(value.phone) && value.phone.length === 11) {
    errorText.phone = "validIncorrectPhone";
  } else if (value.phone.length < 11) {
    errorText.phone = "validLength11";
  } else delete errorText.phone;
  return errorText;
};
const validateCode = (value) => {
  const errorCodeText = {};

  if (!value.code) {
    errorCodeText.code = "validEnterCode";
  } else if (value.code.length < 6) {
    errorCodeText.code = "validLengthCode6";
  } else delete errorCodeText.code;
  return errorCodeText;
};
export { validatingRegister, validateCode };
