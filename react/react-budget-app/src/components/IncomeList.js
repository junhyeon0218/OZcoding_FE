// IncomeList.js
//수입목록 부분
import React, { useContext } from "react";
import IncomeItem from "./IncomeItem";
import { AppContext } from "../contexts/AppContext";

const IncomeList = () => {
  const { income } = useContext(AppContext);

  return (
    <div>
      <h3>수입 목록</h3>
      <ul className="list-group">
        {income.map((item) => (
          <IncomeItem
            key={item.id}
            id={item.id}
            name={item.name}
            amount={item.amount}
          />
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;