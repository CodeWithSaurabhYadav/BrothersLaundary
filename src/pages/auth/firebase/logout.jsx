import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";

const logoutUser = async (navigate) => {
  try {
    await signOut(auth);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/auth/login");
  } catch (error) {
    console.log(error);
  }
}

export default logoutUser;