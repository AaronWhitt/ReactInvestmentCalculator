import UserInput from "./components/UserInput";
import Header from "./components/Header";
import { calculateInvestmentResults } from "./util/investment";
import { useState } from "react";
const VARIABLES = {
  initalInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 1,
};
function App() {
  const [variables, setVariables] = useState(VARIABLES);
  function handleChange(variable, newVariable) {
    setVariables((prevVariables) => {
      return {
        ...prevVariables,
        [variable]: newVariable,
      };
    });
  }
  return (
    <main>
      <Header />
      <UserInput initalVariables={variables} handleChange={handleChange} />;
    </main>
  );
}

export default App;
