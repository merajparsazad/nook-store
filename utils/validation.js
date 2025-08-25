const validateUsername = (username) => {
  const regex = /^[a-zA-Z\d_]{4,16}$/;
  const result = regex.test(username);
  return result;
};

const validatePassword = (password) => {
  const regex = /^.{4,20}$/;
  const result = regex.test(password);
  return result;
};

const validateForm = (username, password) => {
  const validUsername = validateUsername(username);
  const validPassword = validatePassword(password);

  if (validUsername & validPassword) {
    return true;
  } else if (!validUsername) {
    alert("Invalid username!");
  } else if (!validPassword) {
    alert("Password must be 4-20 characters!");
  }
};

export default validateForm;
