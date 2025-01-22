import { useState } from "react";
export default function UserInput({ initialVariables, handleChange }) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    initialVariables;

  function handleInputChange(inputVariable, newValue) {
    handleChange(inputVariable, newValue);
  }
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            onChange={(event) =>
              handleInputChange("initialInvestment", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            onChange={(event) =>
              handleInputChange("annualInvestment", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            onChange={(event) =>
              handleInputChange("expectedReturn", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            onChange={(event) =>
              handleInputChange("duration", event.target.value)
            }
            required
          />
        </p>
      </div>
    </section>
  );
}
