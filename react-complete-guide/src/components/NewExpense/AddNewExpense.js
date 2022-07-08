import React from "react";

const AddNewExpense = (props) => {
  const clickAddHandler = () => {
    props.onClickAddExpense(true);
  }

  return <button onClick={clickAddHandler}>Add New Expense</button>;
}

export default AddNewExpense;