import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";
import ExpenseItem from "../components/ExpenseItem";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);
  console.log(expenses);

  useEffect(() => {
    setFilteredExpenses(expenses);
  }, [expenses]);

  const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);

  //검색하기
  const handleChange = (e) => {
    const searchResults = expenses.filter((expenses) =>
      expenses.name.toLowerCase().includes(e.target.value)
    );
    setFilteredExpenses(searchResults);
  };

  return (
    <>
      <input
        tupe='text'
        className='form-control'
        placeholder='검색하기...'
        onChange={handleChange}
      />
      <ul className='list-group mt-3 mb-3'>
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </ul>
    </>
  );
};

export default ExpenseList;
