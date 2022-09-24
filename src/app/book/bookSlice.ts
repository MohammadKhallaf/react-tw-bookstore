import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// Define a type for the slice state
interface BookState {
  book_list: Book[];
}

// Define the initial state using that type
const initialState: BookState = {
  book_list: [],
};

export const counterSlice = createSlice({
  name: "book",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
