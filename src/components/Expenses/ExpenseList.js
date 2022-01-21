import react from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

const ExpenseList = (props) => {
    let expenseContent = <p>No Expenses</p>

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses</h2>
    }

    return <li className="expenses_list">
        {props.items.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)}
    </li>
}

export default ExpenseList;