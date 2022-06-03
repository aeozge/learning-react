import React from "react";

import "../styles/shoppingForm.styles.css";

export default function Shopping({
  product,
  index,
  completedItem,
  removedItem,
}) {
  return (
    <div style={{ textDecoration: product.isBought ? "line-through" : "" }}>
      {product.item}

      <div>
        <button className="button" onClick={() => completedItem(index)}>
          Complete
        </button>
        <button className="button" onClick={() => removedItem(index)}>
          Delete
        </button>
      </div>
    </div>
  );
}
