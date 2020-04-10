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
      console.log(`adding ${action}`);
      return {
        itemsArray: [...state.itemsArray, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        itemsArray: state.itemsArray.filter((e) => e.id != action.payload.id),
      };
    case "TOGGLE_COMPLETED":
      return {
        itemsArray: state.itemsArray.map((e) => {
          if (e.id === action.payload.id) {
            return { ...e, isCompleted: !e.isCompleted };
          }
          return e;
        }),
      };
    case "CLEAR_ALL":
      return {
        itemsArray: [],
      };
    case "CLEAR_COMPLETED":
      return {
        itemsArray: state.itemsArray.filter((e) => e.isCompleted === false),
      };

    default:
      return state;
  }
};
