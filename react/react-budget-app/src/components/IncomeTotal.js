import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { formatNumberToWon } from "../utils";

const IncomeTotal = () => {
  const { income } = useContext(AppContext);

  const total = income.reduce((total, item) => {
    return (total += item.amount);
  }, 0);

  return (
    <div className='alert alert-success p-4'>
      <span>총 수입: {formatNumberToWon(total)}</span>
    </div>
  );
};

export default IncomeTotal;
