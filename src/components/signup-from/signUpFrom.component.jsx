import { async } from "@firebase/util";
import { useState } from "react";
import FormInput from "../../formInput/formInput.component";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
import Button from "../button/button.component";
import "./signUpForm.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";

const defaultFromFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [fromFields, setFromFields] = useState(defaultFromFields);
  const { displayName, email, password, confirmPassword } = fromFields;
  const { setCurrentUser } = useContext(UserContext);

  const resetFromFields = () => {
    setFromFields(defaultFromFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password donot match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
      await createUserDocumentFromAuth(user, { displayName });

      resetFromFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("email already in use please use another email");
      } else {
        console.log("erroer occured", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFromFields({ ...fromFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your e-mail and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          lable="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          lable="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          lable="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          lable="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit"> Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
