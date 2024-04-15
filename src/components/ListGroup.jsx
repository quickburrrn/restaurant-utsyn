import { useState } from "react";

function ListGroup(Props) {
  // Destructure props
  const {items, heading, onSelectItem} = Props

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1 className="text-center">{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group text-center">
        {items.map((item, index) => (
          <li
            className={(selectedIndex === index ? 'list-group-item active' : 'list-group-item') + " py-3"}
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
