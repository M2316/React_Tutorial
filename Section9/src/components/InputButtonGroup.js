

import styles from './InputButtonGroup.css';

export default function InputDeviceInfo(props){
    return (
        <p className="actions">
            <button type="reset" className="buttonAlt">
                Reset
            </button>
            <button type="submit" className="button">
                Calculate
            </button>
        </p>
    );
}