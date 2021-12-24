import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem (props){

    // const expenseDate = new Date(2020,3, 22);
    // const expenseTitle = "Broker Cost";
    // const expenseAmount = 21000.00;

    return (
        <div className="expense-item">
            
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div> 
            </div>
        </div>
    )
}

export default ExpenseItem;