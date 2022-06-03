import React from "react";
import { useState } from "react";
import Shopping from "./shopping.component";
import ShoppingForm from "./shoppingForm.component";
import "../styles/shoppingList.styles.css";

const ShoppingList = () => {
  const [products, setProducts] = useState([
    {
      item: "Banana",
      isBought: false,
    },
    {
      item: "Milk",
      isBought: false,
    },
    {
      item: "Apple",
      isBought: false,
    },
    {
      item: "Paper Towel",
      isBought: false,
    },
    {
      item: "Candle",
      isBought: false,
    },
    {
      item: "Cheese",
      isBought: false,
    },
  ]);

  const addItem = (item) => {
    const newProducts = [...products, { item }];
    setProducts(newProducts);
    // console.log(newProducts)
  };
  const completedItem = (index) => {
    const newProducts = [...products];
    newProducts[index].isBought = true;
    setProducts(newProducts);
  };
  const removedItem = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
  };
  const searchItem = (item) => {
    let newProducts = [...products];
    newProducts = newProducts.filter((x) => x.item.includes(item));
    setProducts(newProducts);
    //console.log(newProducts)
  };

  return (
    <div>
      <ShoppingForm addItem={addItem} searchItem={searchItem} />
      <ul className="shopping-list">
        {products.map((product, index) => (
          <li key={index}>
            <Shopping
              key={index}
              index={index}
              product={product}
              completedItem={completedItem}
              removedItem={removedItem}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
