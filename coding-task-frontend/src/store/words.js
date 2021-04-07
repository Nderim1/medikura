import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

//Action types/creators/reducer
const slice = createSlice({
  name: "words",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    wordsRequested: (words, action) => {
      words.loading = true;
    },
    wordsReceived: (words, action) => {
      words.list = action.payload.words;
      words.loading = false;
      words.lastFetch = Date.now();
    },
    wordsRequestFailed: (words, action) => {
      words.loading = false;
    },
  },
});

export const {
  wordsRequested,
  wordsReceived,
  wordsRequestFailed,
} = slice.actions;
export default slice.reducer;

export const loadWords = (searchQuery) => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: `http://localhost:3000/api/scrabble/${searchQuery}`,
      onStart: wordsRequested.type,
      onSuccess: wordsReceived.type,
      onError: wordsRequestFailed.type,
    })
  );
};
