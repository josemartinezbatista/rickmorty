const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPass = /^(?=\w*\d)(?=\w*[a-z])\S{6,10}$/;

export function validation(inputs) {
  const errors = {};

  if (!regexEmail.test(inputs.username) || inputs.username.length > 35 || inputs.username === "") {
    errors.username = "Por favor, complete este campo";
  }
  if (inputs.password.length > 10 || inputs.password.length < 6 || !regexPass.test(inputs.password)) {
    errors.password = "Por favor, complete este campo";
  }

  return errors;
}
