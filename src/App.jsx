import UserInput from "./components/UserInput";
import Header from "./components/Header";
import Result from "./components/Result";
import { useState } from "react";
const VARIABLES = {
  initialInvestment: null,
  annualInvestment: null,
  expectedReturn: null,
  duration: null,
};
function App() {
  const [variables, setVariables] = useState(VARIABLES);
  function handleChange(variable, newVariable) {
    setVariables((prevVariables) => {
      return {
        ...prevVariables,
        [variable]: parseFloat(newVariable),
      };
    });
  }

  return (
    <main>
      <Header />
      <UserInput initialVariables={variables} handleChange={handleChange} />
      <Result inputVariables={variables} />
    </main>
  );
}

export default App;
