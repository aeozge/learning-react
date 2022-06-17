import "../styles/shoppingForm.styles.css";
import React from "react";
import {useRef} from 'react'

type NewShoppingProps = {
  addItem:(productText:string) => void
};

const Shopping: React.FC<NewShoppingProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.addItem(enteredText);
    textInputRef.current!.value = '';
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label>Add Item to Shopping List</label>
        <input type="text" ref={textInputRef}/>
      </div>

      <button type="submit">Add Item</button>
    </form>
  );
};
export default Shopping;
