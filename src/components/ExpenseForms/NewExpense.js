import react, {useState} from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) =>{
   const [isEditing, setIsEditing]= useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString(),
        
        };
        props.onAddExpense(expenseData)
    }

    const editingHandler = () =>{
        setIsEditing(true)
    }
    const stopEditing = ()=>{
        setIsEditing(false)

    }

    return <div className="new-expense">
       {!isEditing && <button onClick={editingHandler}>Add New Expense</button>}
     { isEditing &&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditing}/>}
    </div>
}

export default NewExpense;