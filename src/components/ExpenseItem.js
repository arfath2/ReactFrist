import './ExpenseItem.css'

function ExpenseItem() {
    const expenseDate = new Date();
    const expenseTitle = 'car insuranse';
    const expensePrize = 294.65;

    return (
        <div className='expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${expensePrize}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;