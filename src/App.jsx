import UserInput from "./components/UserInput";
import Header from "./components/Header";
import Result from "./components/Result";
import { useState } from "react";
const VARIABLES = {
  initialInvestment: 10000,
  annualInvestment: 900,
  expectedReturn: 5.5,
  duration: 12,
};
function App() {
  const [variables, setVariables] = useState(VARIABLES);

  const validInput = variables.duration >= 1;
  function handleChange(inputVariable, newValue) {
    setVariables((prevVariables) => {
      return {
        ...prevVariables,
        //[inputVariable]: parseFloat(newValue),
        [inputVariable]: +newValue, //Adding plus infront of newValue converts like parseFloat would.
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput initialVariables={variables} handleChange={handleChange} />
      {!validInput && <p className="center">Duration must be greater than 0</p>}
      {validInput && <Result inputVariables={variables} />}
    </>
  );
}

export default App;
