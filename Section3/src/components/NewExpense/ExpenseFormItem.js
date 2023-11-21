export default function ExpenseFormItem(props){

    if(!props.formFlag){
        return ;
        
    }

    return(
        <div className="new-expense__controls">
                <div className="new-expense__controls"> 
                    <label>Title</label>
                    <input type='text' value={props.enteredTitle} onChange={(e)=>{props.onInputChangeHandler("title",e.target.value)}}/>
                </div>
                <div className="new-expense__controls"> 
                    <label>Amount</label>
                    <input type='number' value={props.enteredAmount} min="0.01" step="0.01" onChange={(e)=>{props.onInputChangeHandler("amount",e.target.value)}}/>
                </div>
                <div className="new-expense__controls"> 
                    <label>Date</label>
                    <input type='date' value={props.enteredDate} min="2019-01-01" max="2022-12-31" onChange={(e)=>{props.onInputChangeHandler("date",e.target.value)}}/>
                </div>
            </div>
    );
}