import styles from "./InputRowGroup.module.css";

export default function InputRowGroup(props){
    return(
        <div className={`${styles.InputRowGroup}`}>
            {props.children}
          </div>
    );
}