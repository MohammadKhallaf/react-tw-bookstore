import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { getAllBooks } from "@/app/services/books-api";

// Define a type for the slice state
export interface BookState {
  count: number;
  bookList: Book[];
  loading: boolean;
}

// Define the initial state using that type
const initialState: BookState = {
  count: 0,
  bookList: [],
  loading: true,
};
export const fetchAllBooks = createAsyncThunk(
  "books/fetchAll",
  async (pageId: number) => await getAllBooks(pageId)
);

export const bookSlice = createSlice({
  name: "books",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchAllBooks.fulfilled,
        (state, { payload }: { payload: BookList }) => {
          state.count = Math.floor(payload.count / 32);
          state.bookList = payload.results;
          state.loading = false;
        }
      );
  },
});

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export const selectBooks = (state: RootState) => state.books.bookList;
export const selectLoading = (state: RootState) => state.books.loading;
export const selectCount = (state: RootState) => state.books.count;

export default bookSlice.reducer;
