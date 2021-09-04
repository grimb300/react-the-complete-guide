import { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./List.css";

const List = () => {
  const [items, setItems] = useState([1, 2, 3]);

  const addItemHandler = () => {
    setItems((prevItems) => prevItems.concat(prevItems.length + 1));
  };

  const removeItemHandler = (selIndex) => {
    setItems((prevItems) =>
      prevItems.filter((item, index) => index !== selIndex)
    );
  };

  const fadeTimeout = 300;

  const listItems = items.map((item, index) => (
    <CSSTransition key={index} classNames="fade" timeout={fadeTimeout}>
      <li className="ListItem" onClick={() => removeItemHandler(index)}>
        {item}
      </li>
    </CSSTransition>
  ));

  return (
    <div>
      <button className="Button" onClick={addItemHandler}>
        Add Item
      </button>
      <p>Click Item to Remove.</p>
      <TransitionGroup component="ul" className="List">
        {listItems}
      </TransitionGroup>
    </div>
  );
};

export default List;
