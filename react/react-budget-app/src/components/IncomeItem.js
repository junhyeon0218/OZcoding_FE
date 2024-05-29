// IncomeItem.js

import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../contexts/AppContext";

const IncomeItem = ({ id, name, amount }) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteIncome = () => {
    dispatch({
      type: "DELETE_INCOME",
      payload: id,
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <div>
        <span className="badge bg-success me-3">{amount}</span>
        {/* <button onClick={handleDeleteIncome} className="btn btn-danger">
          삭제
        </button> */}
        <TiDelete onClick={handleDeleteIncome} size={"1.5em"} />
      </div>
    </li>
  );
};

export default IncomeItem;