import {Fragment} from 'react'
import classes from './Header.module.css'
import Meals from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

export default function Header(props) {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>Order Your Meals</h1>
            <HeaderCartButton onClick= {props.showCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={Meals} alt = "A table full of food" />
        </div>
    </Fragment>
  )
}
