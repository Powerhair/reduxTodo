import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Popup } from "../models/Todo";

const initialState: Popup = {
  isOpenAdd: false,
  isOpenDelete: false,
  isOpenEdit: false,
  selectedTodoId: null,
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    openAddPopup(state) {
      state.isOpenAdd = true;
    },
    openDeletePopup(state) {
      state.isOpenDelete = true;
    },
    openEditPopup(state) {
      state.isOpenEdit = true;
    },
    closePopup(state) {
      state.isOpenAdd = false;
      state.isOpenDelete = false;
      state.isOpenEdit = false;
    },
    setSelectedTodoId(state, action: PayloadAction<string | null>) {
      state.selectedTodoId = action.payload;
    },
  },
});

export const {
  openAddPopup,
  openDeletePopup,
  openEditPopup,
  closePopup,
  setSelectedTodoId,
} = popupSlice.actions;
export default popupSlice.reducer;
