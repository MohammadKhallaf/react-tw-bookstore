import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
export interface userState {
  language: string;
  cartItems: Book[];
  favItems: number;
}
const initialState: userState = {
  language: "en",
  cartItems: [],
  favItems: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addFav: (state) => {
      state.favItems++;
    },
    addToCart: (state, { payload }) => {
      if (!state.cartItems.find((book) => book.id === payload.id)) {
        state.cartItems.push(payload);
      } 
    },
  },
  extraReducers: (builder) => {},
});

export const selectCartItemsLength = (state: RootState) =>
  state.user.cartItems.length;
export const selectCartItems = (state: RootState) => state.user.cartItems;

export const { addFav, addToCart } = userSlice.actions;
export const selectFav = (state: RootState) => state.user.favItems;
export default userSlice.reducer;
