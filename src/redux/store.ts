import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import todosReducer from "./todoSlice";
import popupReducer from "./popupSlice";

const rootReducer = combineReducers({
  todos: todosReducer,
  popup: popupReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
