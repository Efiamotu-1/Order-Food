import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

export default function Cart(props) {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;


  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount : 1})
  }

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li>
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove = {cartItemRemoveHandler.bind(null, item.id)}
            onAdd = {cartItemAddHandler.bind(null, item)}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.closeCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span> <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.closeCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}
