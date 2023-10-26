import './App.css'
import { RecoveryPasswordForm } from './components/recoveryPasswordForm/recoveryPasswordForm';
import { SignUpForm } from './components/signUpForm/signUpForm';

export const App = () => {
  return (
    <div className="App">
      <RecoveryPasswordForm />
      {/* <SignUpForm /> */}
    </div>
  );
}