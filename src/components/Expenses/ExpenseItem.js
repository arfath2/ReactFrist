import React,{ useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
    const [title,setTitle] = useState(props.title)
    const changeTitle = () => {
        setTitle('changed')
    }

    //const deleteItem = (e)=>{
        // if(e.target.classList.contains('delete')){
        //     if(alert('Are You Sure?')){
        //       var li = e.target.parentElement;
        //       items.removeChild(Card);
        //     }
        //   }
   // }

    return (
        <Card id="items" className='expense-item delete'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <h2>{props.loe}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={changeTitle}>change title</button>
            {/* <button onClick={deleteItem}>Delete</button> */}
        </Card>
    ); 
}

export default ExpenseItem;