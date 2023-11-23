
import styles from "./InputGroupRow.css";
export default function InputGroupRow(props) {


    



    return (
        <div className="input-group">
            <p>
                <label htmlFor={props.leftId}>{props.leftText}</label>
                <input type="number" id={props.leftId} onChange={props.onChangeHandler}/>
            </p>
            <p>
                <label htmlFor={props.rightId}>{props.rightText}</label>
                <input type="number" id={props.rightId} onChange={props.onChangeHandler}/>
            </p>
        </div>
    );
}