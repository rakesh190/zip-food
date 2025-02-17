import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload); //mutating the state
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      //RTK says either Mutate the existing state of return a new state(return [])
      state.items.length = 0;
      // we can also do return=[{items: []}], this new obj will replace inside original state
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

/**
 * createSlice will return an object
 const cartSlice = {
    actions: {
        addItem: 'fn',
        removeItem: 'fn',
        clearCart: 'fn'
    },
    reducer: fn
}
    This is the reason to export cartClice.actions
 */
