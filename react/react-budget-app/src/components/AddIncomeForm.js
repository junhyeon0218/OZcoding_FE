// AddIncomeForm.js
//수입 추가부분
import React, { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";

const AddIncomeForm = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const { dispatch } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_INCOME",
      payload: {
        id: crypto.randomUUID(),
        name,
        amount: parseFloat(amount),
      },
    });

    setName("");
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm col-lg-4">
          <label>수입</label>
          <input
            required
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>금액</label>
          <input
            required
            type="number"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="row mt-3">
          <div className="col-sm">
            <button type="submit" className="btn btn-primary">
              추가
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddIncomeForm;