import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    isSearch: [],
    searchButton: false,
  },
  reducers: {
    activetionSearch (state,{payload}) {
        return {
          ...state,
          searchButton: !state.searchButton,
        };
    },
    searchToDo(state,{payload}) {
        // console.log(state.isSearch);
        return {
            ...state,
            isSearch: payload.toDos.filter(el => el.text.includes(payload.ev))}
    }
  }
});

export const selectSearch = state =>  state.search;
export const searchReducer = searchSlice.reducer;
export const { activetionSearch, searchToDo } = searchSlice.actions;
