const initializedState = {
  basketType: "",
  selectedItems: "",
  itemsCounter: 0,
  total: 0
};
const sumItems = (items) => {
  let itemsCounter = items.length;
  let total = items.reduce(
    (total, product) => total + product.amount * product.qty,
    0
  );
  return { itemsCounter, total };
};
const basketReducer = (state = initializedState, action) => {
  switch (action.type) {
    case "SET_BASKET_DETAILS":
      return {
        ...state,
        selectedItems: action.payload,
        ...sumItems(action.payload)
      };
    case "BASKET_TYPE":
      return {
        ...state,
        basketType: action.payload
      };
    case "DELETE_BASKET_DATA":
      return {
        basketType: "",
        selectedItems: "",
        itemsCounter: 0,
        total: 0
      };
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1
        });
      }

      return {
        ...state,
        selectedItems: [...state.selectedItems],
        ...sumItems(state.selectedItems)
      };
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumItems(newSelectedItems)
      };
    case "INCREASE":
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexI].qty++;
      return {
        ...state,
        ...sumItems(state.selectedItems)
      };
    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.selectedItems[indexD].qty >= 2) {
        state.selectedItems[indexD].qty--;
      }
      return {
        ...state,
        ...sumItems(state.selectedItems)
      };

    default:
      return state;
  }
};

export default basketReducer;
