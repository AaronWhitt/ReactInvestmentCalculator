import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ inputVariables }) {
  const results = calculateInvestmentResults(inputVariables);
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    inputVariables;
  console.log(results);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((row) => {
          const totalInterest =
            row.valueEndOfYear -
            initialInvestment -
            row.annualInvestment * row.year;
          const investedCapital = row.valueEndOfYear - totalInterest;
          return (
            <tr key={row.year}>
              <td>{row.year}</td>
              <td>{formatter.format(row.valueEndOfYear)}</td>
              <td>{formatter.format(row.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
