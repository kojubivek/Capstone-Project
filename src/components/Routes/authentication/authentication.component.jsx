import SignUpForm from "../../signup-from/signUpFrom.component";
import SignInForm from "../../signInForm/signIn.component";

import "./authentication.styles.scss";
const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
