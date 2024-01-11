export default function ExpenseFormItemBtn(props){
    
    if(!props.formFlag){
        return <button onClick={props.onClickNewExpenseFromOpen}>New Add Expense</button>
    }else{
        return(
            <div className="new-expense__actions">
                <button onClick={props.onClickNewExpenseFromClose}>close</button>
                <button type="submit">Add Expense</button>
            </div>
        );
    }
    



    
}