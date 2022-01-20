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
  return (
    <div>
    <Card className="expenses">
    <ExpenseFilter selected={filteredYear}  onChangeFilter={filterChangeHandler}/>
    {props.items.map(expenses => <ExpenseItem title={expenses.title} amount={expenses.amount} date={expenses.date} />)}
    </Card>
    </div>
  );
}

export default Expenses;