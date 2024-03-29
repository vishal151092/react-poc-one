
import Card from './Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

export default function Expenses(props) {
    return (
        <Card className="expenses">
            <ExpenseItem title={props.items[0].title} date={props.items[0].date} amount={props.items[0].amount}></ExpenseItem>
            <ExpenseItem title={props.items[1].title} date={props.items[1].date} amount={props.items[1].amount}></ExpenseItem>
            <ExpenseItem title={props.items[2].title} date={props.items[2].date} amount={props.items[2].amount}></ExpenseItem>
            <ExpenseItem title={props.items[0].title} date={props.items[0].date} amount={props.items[0].amount}></ExpenseItem>
            
        </Card>
    );
}