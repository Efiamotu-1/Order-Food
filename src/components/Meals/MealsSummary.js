import React from 'react'
import classes from './MealsSummary.module.css'

export default function MealsSummary() {
  return (
    <section className={classes.summary}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
            Choose your favourite meal from our broad 
            selection of available meals and enjoy a delicious lunch or dinner at home
        </p>

        <p>
            All meals are cooked with high quality ingredient 
            just in time and of course by experienced chefs       </p>
    </section>
    )
}
