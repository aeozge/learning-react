import "../styles/shoppingForm.styles.css";
import React from "react";
import {useRef} from 'react'

type SearchShoppingProps = {
  searchItem:(searchText:string) => void
};

const SearchShopping: React.FC<SearchShoppingProps> = (searchProps) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  
  const searchSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const searchedText = textInputRef.current!.value;
    searchProps.searchItem(searchedText);
  };
  return (
 
    <form onSubmit={searchSubmitHandler}>
      <div className="form-control">
        <label>Search Item from Shopping List</label>
        <input type="text" ref={textInputRef}/>
      </div>

      <button type="submit">Search Item</button>
    </form>
  
  );
};
export default SearchShopping;