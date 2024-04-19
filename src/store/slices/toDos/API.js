import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const TO_DOS = "http://localhost:3005/toDos";

export const fetchToDos = createAsyncThunk("toDos/postItem", async (newItem) => {
  const posts = await axios.post(TO_DOS,newItem)
  const post = await posts.data
  return post;
});


export const fetchGet = createAsyncThunk("toDos/getTodos", async () => {
  const getToDos = await axios.get(TO_DOS)
  const results = await getToDos.data
  return results
})


export const fetchDelete = createAsyncThunk("toDos/delItems", async (id) => {
  const deleteItem = await axios.delete(TO_DOS + "/" + id)
  const results = await deleteItem.data
  return results;
});


export const fetchChecked = createAsyncThunk("toDos/changeChecked",async (el) => {
  const changeChecked = await axios.patch(TO_DOS + "/" + el.id,{ isCompleted: !el.isCompleted })
  const changeResults = await changeChecked.data
  return changeResults
});

export const fetchText = createAsyncThunk("toDos/changeTxt", async ({ el, ev }) => {
  const changesTxt = await axios.patch(TO_DOS + "/" + el.id, { text: ev })
  const resultsTxt = await changesTxt.data
  return resultsTxt
});


export const fetchDeleteCompletedItems = createAsyncThunk("toDos/delCompleted",async (completed) => {
  for(let i = 0;i < completed.length;i++) {
    const delComp = await axios.delete(TO_DOS + "/" + completed[i].id)
  }
});

export const fetchDeleteAll = createAsyncThunk("toDos/All",async (completed) => {
  
   for (let i = 0; i < completed.length; i++) {
     const delComp = await axios.delete(TO_DOS + "/" + completed[i].id);
   }
});