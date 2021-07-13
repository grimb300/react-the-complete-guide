import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    incrementBy(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// const counterReducer = (state = initialState, action) => {
//   const newState = { ...state };
//   if (action.type === "increment") {
//     newState.counter = state.counter + 1;
//   }
//   if (action.type === "incrementBy") {
//     newState.counter = state.counter + action.amount;
//   }
//   if (action.type === "decrement") {
//     newState.counter = state.counter - 1;
//   }
//   if (action.type === "toggle") {
//     newState.showCounter = !state.showCounter;
//   }
//   return newState;
// };

// const store = createStore(counterReducer);

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
