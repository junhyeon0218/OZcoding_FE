import React from "react";
import "../styles/ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({
  expenses,
  handleDelete,
  handleDeleteAll,
  handleEdit,
}) => {
  return (
    <>
      <ul className='list'>
        {expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>

      <button className='btn' onClick={handleDeleteAll}>
        지우기
      </button>
    </>
  );
};

export default ExpenseList;
