import "./App.css";
import { LoginForm } from "./components/loginForm/loginForm";
import { RecoveryPasswordForm } from "./components/recoveryPasswordForm/recoveryPasswordForm";
import { SignUpForm } from "./components/signUpForm/signUpForm";

export const App = () => {
  return (
    <div className="App">
      {/* <RecoveryPasswordForm /> */}
      <LoginForm />
    </div>
  );
};
