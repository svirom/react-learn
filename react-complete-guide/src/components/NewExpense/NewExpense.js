import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import AddNewExpense from './AddNewExpense';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const [addClicked, setAddClicked] = useState(false);

  const clickAddExpenseHandler = (data) => {
    setAddClicked(data);
  }

  return (
    <div className="new-expense">
      {addClicked ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onClickAddExpense={clickAddExpenseHandler}
        />
      ) : (
        <AddNewExpense onClickAddExpense={clickAddExpenseHandler} />
      )}
    </div>
  );
  

  
  
}

export default NewExpense;