import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import AvailableMeals from './AvailableMeals'
import MealsSummary from './MealsSummary'

export default function Meals() {
  return (
    <Fragment>
        <MealsSummary />
        <AvailableMeals />
    </Fragment>
  )
}
