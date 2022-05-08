import { React, useContext } from "react";
import { CartContext } from "../App";

export default function CartItem({ title, quantity, price }) {
  const { Cart, setCart } = useContext(CartContext);

  const remove_item = () => {
    const index = Cart.findIndex((x) => x.title === title);
    let temp = Cart;

    let left = temp.slice(0, index); // Everything before configs[index]
    let right = temp.slice(index + 1);
    //console.log(Cart[key]);
    //temp.splice(index, 1);
    setCart([...left, ...right]);
    //console.log(Cart);
  };

  return (
    <div id="Cart_item">
      <div>Title: {title}</div>
      <div>Quantity: {quantity}</div>
      <div>Price each: ${price}</div>
      <button onClick={() => remove_item()}>Delete</button>
    </div>
  );
}
