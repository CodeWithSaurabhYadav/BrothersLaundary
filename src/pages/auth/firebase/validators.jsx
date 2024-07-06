import isEmail from "validator/lib/isEmail";

const isPassword = (password) => {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  return regex.test(password);
};


const isValidateCredentialsSignUP = (formData) => {
  if (!isEmail(formData.email)) {
    return {
      validationStatus: false,
      validationError: "Email is not valid.",
    }
  }

  if (formData.password1 !== formData.password2) {
    return {
      validationStatus: false,
      validationError: "Passwords do not match.",
    }
  }

  if (!isPassword(formData.password1)) {
    return {
      validationStatus: false,
      validationError:
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character.",
    }
  }

  return {
    validationStatus: true,
    validationError: "",
  }
};

const isValidateCredentialsLogin = (formData) => {
  if (!isEmail(formData.email)) {
    return {
      validationStatus: false,
      validationError: "Email is not valid.",
    }
  }

  if (!isPassword(formData.password)) {
    return {
      validationStatus: false,
      validationError:
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character.",
    }
  }

  return {
    validationStatus: true,
    validationError: "",
  }
};

export { 
  isPassword,
  isValidateCredentialsSignUP,
  isValidateCredentialsLogin
};