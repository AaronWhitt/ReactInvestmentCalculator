import { useState } from "react";
export default function UserInput({ initialVariables, handleChange }) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    initialVariables;

  function handleInputChange(event) {
    handleChange(event.target.id, event.target.value);
  }
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            id="initialInvestment"
            onChange={handleInputChange}
            required
            // value={initialInvestment}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            id="annualInvestment"
            onChange={handleInputChange}
            required
            //value={annualInvestment}
          />
        </p>
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            id="expectedReturn"
            onChange={handleInputChange}
            required
            //value={expectedReturn}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            id="duration"
            onChange={handleInputChange}
            required
            //value={duration}
          />
        </p>
      </div>
    </section>
  );
}
