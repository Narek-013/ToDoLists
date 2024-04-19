import { configureStore } from "@reduxjs/toolkit";
import { toDosReducer } from "./slices/toDos/toDoSlices";
import { searchReducer } from "./slices/toDosSearch/searchSlice";
import { IgnorEmptyToDo } from "./MiddleWare/ToDoHeader";

export const store = configureStore({
  reducer: {
    toDos: toDosReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(),IgnorEmptyToDo],
});