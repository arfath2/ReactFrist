import React , { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter'
import './Expenses.css';

function Expenses(props) {
  const [filteredYear,SetFilteredYear]=useState('2021');
  const filterChangeHandler = selecterYear =>{
    SetFilteredYear(selecterYear)
  }

  const filteredExpense = props.items.filter(expense =>{
    return expense.date.getFullYear().toString()===filteredYear
  })

  let expenseContent = <p>No Expenses</p>
  let expenseContent1 = <p>here you have one expense add more</p>


  if(filteredExpense.length > 0 ){
    expenseContent =     filteredExpense.map(expense => <ExpenseItem  key={expense.id}title={expense.title} amount={expense.amount} date={expense.date} />)
  }
  return (
    <div>
    <Card className="expenses">
    <ExpenseFilter selected={filteredYear}  onChangeFilter={filterChangeHandler}/>
    {expenseContent}
    </Card>
    </div>
  );
}

export default Expenses;