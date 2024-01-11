import React, { useContext } from 'react'
import Card from '../Cart/Card'
import MealsItem from './MealsItem'

import styles from './AvailableMeals.module.css'
import DummyContext from '../../store/dummy-context'

const AvailableMeals = () => {

  const dummyCtx = useContext(DummyContext);

  return (
    <div className={styles.meals}>

      <Card>
        {dummyCtx.dummy.map(((item,key)=>
          <MealsItem key={key} item={item}></MealsItem>))}
      </Card>
    </div>
  )
}

export default AvailableMeals