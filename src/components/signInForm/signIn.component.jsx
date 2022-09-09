import { async } from "@firebase/util";
import { useState, useContext } from "react";
import FormInput from "../../formInput/formInput.component";
import {
  signInAuthWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase.utils";
import Button from "../button/button.component";
import "./signInForm.styles.scss";

import { UserContext } from "../../context/user.context";

const defaultFromFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [fromFields, setFromFields] = useState(defaultFromFields);
  const { email, password } = fromFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFromFields = () => {
    setFromFields(defaultFromFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthWithEmailAndPassword(email, password);
      setCurrentUser(user);
      resetFromFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password and email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFromFields({ ...fromFields, [name]: value });
  };
  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign In with your e-mail and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType="google"
            onClick={signInWithGooglePopup}
          >
            {" "}
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
