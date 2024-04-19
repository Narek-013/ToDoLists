import { createSlice } from "@reduxjs/toolkit";
import {  fetchChecked, fetchDelete, fetchDeleteAll, fetchDeleteCompletedItems, fetchGet, fetchText, fetchToDos } from "./API";

const toDoSlice = createSlice({
  name: "toDos",
  initialState: [],
  reducers: {
    changeEdit(state,{payload}) {
      return state.map(el => el.id === payload.id ? {...el,isEdit: !el.isEdit}:el)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGet.fulfilled, (state, { payload }) => {
        return payload;
      })
      .addCase(fetchToDos.fulfilled, (state, { payload }) => {
        state.push(payload);
      })
      .addCase(fetchDelete.fulfilled, (state, { payload }) => {
        return state.filter((el) => el.id !== payload.id);
      })
      .addCase(fetchDeleteCompletedItems.fulfilled, (state, { payload }) => {
        return state.filter((el) => !el.isCompleted);
      })
      .addCase(fetchDeleteAll.fulfilled, (state, { payload }) => {
        return [];
      })
      .addCase(fetchChecked.fulfilled, (state, { payload }) => {
        return state.map((el) =>
          el.id === payload.id
            ? { ...el, isCompleted: payload.isCompleted }
            : el
        );
      })
      .addCase(fetchText.fulfilled,(state,{payload}) => {
        return state.map(el => el.id === payload.id ? {...el, text : payload.text, isEdit:false} : el)
      });
  }
});

export const selectToDos = state => state.toDos;
export const toDosReducer = toDoSlice.reducer;
export const {changeEdit} = toDoSlice.actions;