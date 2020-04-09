// reducer - takes in multiple inputs and reduces them to a single output
// reducer in redux (applications context) - takes 2 objects, returns 1 object
//   -- obj1 = state
//   -- obj2 = action = {type: "ACTION_TYPE", payload: "data to update state"}

// action - object that has a "type" key and may have a "payload"

export const initialTitleState = {
  title: "Welcome to the TO DO L I S  T",
};

export const initialToDoItemsState = {
  itemsArray: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      console.log(initialToDoItemsState.itemsArray);
      return {
        ...state,
        itemsArray: [initialToDoItemsState.itemsArray, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        editing: !state.editing,
      };
    case "TOGGLE_COMPLETED":
      return {
        ...state,
        editing: !state.editing,
      };

    default:
      return state;
  }
};
