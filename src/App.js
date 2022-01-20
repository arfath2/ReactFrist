import Expenses from './components/Expenses/Expenses';
import react , {useState} from 'react';
import NewExpenses from './components/ExpenseForms/NewExpense';

function App() {
  
  const Dummy = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      loe: 'games'
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12),loe: 'materials' },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      loe: 'food'
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      loe: 'Clothes'
    },
  ];
  const [expenses, setExpenses]=useState(Dummy)
  const addExpenseHandler = expense => {
setExpenses((prevExpenses)=>{
  return [expense,...prevExpenses]
})
  }
  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
