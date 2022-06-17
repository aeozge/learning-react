import React from "react";
import ShoppingListProps from "../interface/ShoppingList.interface";
import "../styles/shoppingList.styles.css";


const ShoppingList: React.FC<ShoppingListProps> = (props) => {
  return (
    <ul>
      {props.items.map((product) => (
        <li key={product.id}>
          <span>{product.text}</span>
          <button onClick={props.deleteItem.bind(null, product.id)}>
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ShoppingList;

