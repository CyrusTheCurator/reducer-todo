import React, { useState, useReducer, useEffect } from "react";

import { reducer, initialToDoItemsState } from "../reducers/reducer";

const Todo = () => {
  const [toDoItemsState, dispatch] = useReducer(reducer, initialToDoItemsState);

  const [newItemText, setnewItemText] = useState("");
  let toDoElements = [{ name: "test" }];

  const handleChanges = (e) => {
    setnewItemText(e.target.value);
  };

  useEffect(() => {
    toDoElements = toDoItemsState.itemsArray;
  }, [toDoItemsState]);

  return (
    <div>
      <h1>Welcome to your TO-DO List </h1>

      <div>
        <input
          className="title-input"
          type="text"
          name="newItemText"
          value={newItemText}
          onChange={handleChanges}
        />
        <button
          onClick={() => {
            dispatch({
              type: "ADD_ITEM",
              payload: { name: newItemText },
            });
          }}
        >
          Add Item
        </button>
      </div>

      <div>
        {toDoItemsState.itemsArray.map((elem) => {
          return (
            <div>
              {elem.name} <button>Remove Item</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
