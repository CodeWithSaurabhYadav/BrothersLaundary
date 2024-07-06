import { isValidateCredentialsSignUP } from "./validators";

import { auth } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";


const signupBE = async (formData, navigate) => {

  const validationData = isValidateCredentialsSignUP(formData);

  if (!validationData.validationStatus) return validationData.validationError;

  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    );
    // console.log(userCredentials);
    const user = userCredentials.user;
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", user.accessToken);
    navigate("/dashboard");
  } catch (error) {
    console.log(error);
  }
}

export default signupBE;

