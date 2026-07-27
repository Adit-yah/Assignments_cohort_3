import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",

  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },

    reset: (state) => {
      state.value = 0;
    },
  },
});

// What createSlice() roughly returns

// const counterSlice = {

//   name: "counter",

//   reducer: function(state, action) {

//     switch(action.type) {

//       case "counter/increment":
//         state.value++;
//         break;

//       case "counter/decrement":
//         state.value--;
//         break;

//       case "counter/reset":
//         state.value = 0;
//         break;

//       default:
//         return state;
//     }

//   },

//   actions: {

//     increment() {
//       return {
//         type: "counter/increment"
//       };
//     },

//     decrement() {
//       return {
//         type: "counter/decrement"
//       };
//     },

//     reset() {
//       return {
//         type: "counter/reset"
//       };
//     }

//   }

// };

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;