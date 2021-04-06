import { createSelector, createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { apiCallBegan } from "./api";

let lastId = 0;

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

export const loadWords = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.words;

  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (lastFetch && diffInMinutes < 10) return;

  dispatch(
    apiCallBegan({
      url: "http://localhost:3000/api/scrabble/",
      onStart: wordsRequested.type,
      onSuccess: wordsReceived.type,
      onError: wordsRequestFailed.type,
    })
  );
};
