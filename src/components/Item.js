import React, { useState } from "react";

function Item({ name, category }) {

  const [toggle, itemAdder] = useState("")

  const toggleAddItem = toggle ? "in-cart" : "";
  const toggleAddText = toggle ? "Remove From Cart" : "Add to Cart";
  const toggleButton = toggle ? "remove" : "add";

  function itemClicker() {
    console.log("clicked");
    itemAdder(!toggle);
  }

  return (
    <li className={toggleAddItem}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={toggleButton} onClick={() => itemClicker()}>{toggleAddText}</button>
    </li>
  );
}

export default Item;
