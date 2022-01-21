import React , { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter'
import './Expenses.css';
import ExpenseChart from './ExpenseChart';
import ExpenseList from './ExpenseList';

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
    <ExpenseChart expenses={filteredExpense} />
    <ExpenseList items={filteredExpense} />
    </Card>
    </div>
  );
}

export default Expenses;