import styles from './ButtonGroup.module.css';

export default function ButtonGroup(props) {
  return (
    <div className={`${styles.ButtonGroup}`}>
      <button type="submit">Add User</button>
    </div>
  );
}
