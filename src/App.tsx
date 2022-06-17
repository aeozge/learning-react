import "./App.css";
import React from "react";
import { useState } from "react";

import Shopping from "./components/shopping.component";
import ShoppingList from "./components/shoppingList.component";
import ListItem from "./interface/ListItem.interface";
import SearchShopping from "./components/searchItem.component";

//FunctionComponent
const App: React.FC = () => {
  const [products, setProducts] = useState<ListItem[]>([
    {
      id: "1",
      text: "Banana",
    },
    {
      id: "2",
      text: "Milk",
    },
    {
      id: "3",
      text: "Paper Towel",
    },
    {
      id: "4",
      text: "Apple",
    },
    {
      id: "5",
      text: "Candle",
    },
    {
      id: "6",
      text: "Cheese",
    },
  ]);

  const addHandler = (text: string) => {
    setProducts((prevItems) => [
      ...prevItems,
      { id: Math.random().toString(), text: text },
    ]);
  };
  const deleteHandler = (todoId: string) => {
    setProducts((prevItems) => {
      return prevItems.filter((todo) => todo.id !== todoId);
    });
  };

  const searchHandler = (text: string) => {
    setProducts((prevItems) => {
      return prevItems.filter((t) => t.text.toLowerCase().includes(text));
    });
  };
  return (
    <div>
      <Shopping addItem={addHandler}/>
      <SearchShopping searchItem={searchHandler} />
      <ShoppingList items={products} deleteItem={deleteHandler} />
    </div>
  );
};

export default App;
