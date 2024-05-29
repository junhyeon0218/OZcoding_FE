// AppContext.js

import React, { createContext, useReducer } from "react";

export const AppContext = createContext();

export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case "SET_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };
    case "ADD_INCOME": // 수입 추가 액션 추가
      return {
        ...state,
        income: [...state.income, action.payload],
      };
    case "DELETE_INCOME": // 수입 삭제 액션 추가
      return {
        ...state,
        income: state.income.filter((income) => income.id !== action.payload),
      };
    default:
      return state;
  }
};

const initialState = {
  budget: 30000,
  expenses: [
    { id: crypto.randomUUID(), name: "밥먹기", cost: 1000 },
    { id: crypto.randomUUID(), name: "카드비", cost: 3000 },
    { id: crypto.randomUUID(), name: "교통비", cost: 7000 },
  ],
  income: [
    // 초기 수입 상태 추가
    { id: crypto.randomUUID(), name: "월급", amount: 50000 },
    { id: crypto.randomUUID(), name: "용돈", amount: 20000 },
  ],
};

export const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        income: state.income, // 수입 상태 추가
        budget: state.budget,
        dispatch,
      }}
      {...props}
    />
  );
};
