import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ inputVariables }) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    inputVariables;
  console.log(inputVariables);
  const results = calculateInvestmentResults(inputVariables);
  let totalInterest = 0;
  let investedCapital = initialInvestment;
  for (let i = 0; i < results.length; i++) {
    totalInterest = totalInterest + results[i]["interest"];
    investedCapital += annualInvestment;
    results[i]["totalInterest"] = totalInterest;
    results[i]["investedCapital"] = investedCapital;
  }

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
        {results.map((row) => (
          <tr key={row.year}>
            <td>{row.year}</td>
            <td>{formatter.format(row.valueEndOfYear)}</td>
            <td>{formatter.format(row.interest)}</td>
            <td>{formatter.format(row.totalInterest)}</td>
            <td>{formatter.format(row.investedCapital)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
