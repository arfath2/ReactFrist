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
  return (
    <div>
    <Card className="expenses">
    <ExpenseFilter selected={filteredYear}  onChangeFilter={filterChangeHandler}/>
    {filteredExpense.map(expense => <ExpenseItem  key={expense.id}title={expense.title} amount={expense.amount} date={expense.date} />)}
    </Card>
    </div>
  );
}

export default Expenses;