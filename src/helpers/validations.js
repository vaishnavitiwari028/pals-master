export const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(email).toLowerCase()))
    return "Please enter a valid email address";
};

export const validatePassword = (password) => {
  let errors = [];
  if (password.length < 8) {
    return "password must be at least 8 characters";
  }
  let error = "Your password must contain at least ";
  if (password.search(/[a-z]/i) < 0) {
    errors.push("letter");
  }
  if (password.search(/[0-9]/) < 0) {
    errors.push("digit");
  }

  if (errors.length === 2) {
    return error + "one letter and one digit";
  } else if (errors[0] === "letter") {
    return error + "one letter";
  } else if (errors[0] === "digit") {
    return error + "one digit";
  }
};
