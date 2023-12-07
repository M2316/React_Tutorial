import React from 'react'
import styles from './MealsItemForm.module.css'
import Input from '../UI/Input'

const MealsItemForm = () => {
  return (
    <div className={styles.form}>
      <Input label={"Amount"} name={"amount"} type={"number"}></Input>
      <button>
        +Add
      </button>
    </div>
  )
}

export default MealsItemForm