import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //열고 닫는 상태
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    //TODO: 모달을 여는 action
    openModal: (state) => {
      state.isOpen = true;
    },
    //TODO: 모달을 닫는 action
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
