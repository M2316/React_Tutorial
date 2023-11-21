import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props)=>{

    const saveExpenseData = (data)=>{
        let expense = {
            ...data,
            id: Math.random().toString()
        };
        props.onAddexpenseFunction(expense);
    }
    

    
    
        return (
            <div className="new-expense">
                <ExpenseForm onSaveExpenseData={saveExpenseData}/>
            </div>
        );
    
}
export default NewExpense;