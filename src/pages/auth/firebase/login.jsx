import { isValidateCredentialsLogin } from "./validators";

import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


const signupBE = async (formData, navigate) => {

  const validationData = isValidateCredentialsLogin(formData);

  if (!validationData.validationStatus) return validationData.validationError;

  try {
    const userCredentials = await signInWithEmailAndPassword(
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

