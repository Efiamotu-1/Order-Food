import React, {useRef, useState} from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'

export default function MealItemForm(props) {
const amountInputRef = useRef();
const [amountIsValid, setAmountIsValid] = useState(true)

const  submitHandler = (event) => {
  event.preventDefault();

  const enteredAmount = amountInputRef.current.defaultValue
  const enteredAmountNumber = +enteredAmount

  if (
    enteredAmount.trim().length === 0 || 
    enteredAmountNumber < 1 ||
    enteredAmountNumber > 5
  ) {
    setAmountIsValid(false)
    return;
  }

  props.onAddToCart(enteredAmountNumber)

}

  return (
<form className={classes.form} onSubmit = {submitHandler}>
    <Input 
    ref = {amountInputRef}
    label = "Amount" 
    input={{
        id : 'Amount',
        type : 'number',
        min : '1',
        max : '5',
        step : '1',
        defaultValue : '1'
    }}/>
    <button className={classes.button}>+ Add</button>
    {!amountIsValid && <p>Please enter as valid amount (1-5)</p>}
</form>
  )
}
