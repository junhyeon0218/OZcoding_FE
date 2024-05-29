import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { formatNumberToWon } from "../utils";

const Remaining = () => {
  const { expenses, income } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const totalIncome = income.reduce((total, item) => {
    return (total += item.amount);
  }, 0);

  const remainingBudget = totalIncome - totalExpenses;

  const alertType = remainingBudget < 0 ? "alert-danger" : "alert-success";

  return (
    <div className={`alert p-4 ${alertType}`}>
      <span>남은 돈: {formatNumberToWon(remainingBudget)}</span>
    </div>
  );
};

export default Remaining;
