import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../constants/cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //TODO: 증가
    increase: (state, { payload }) => {
      // 내가 클릭한 음반의 Id를 가져옴
      const itemId = payload;
      // 그 Id를 통해서, 전체 음반 중에 내가 클릭한 Id랑 비교해서 같은 음반을 찾아냄
      const item = state.cartItems.find((cartItem) => cartItem.id === itemId);
      //내가 클릭한 아이템이 무엇인지 찾았으니, 그 아이의 수량을 증가시킴
      item.amount += 1;
    },

    //TODO: 감소
    decrease: (state, { payload }) => {
      // 내가 클릭한 음반의 Id를 가져옴
      const itemId = payload;
      // 그 Id를 통해서, 전체 음반 중에 내가 클릭한 Id랑 비교해서 같은 음반을 찾아냄
      const item = state.cartItems.find((cartItem) => cartItem.id === itemId);
      //내가 클릭한 아이템이 무엇인지 찾았으니, 그 아이의 수량을 감소시킴
      item.amount -= 1;
    },

    //TODO: 아이템 제거
    removeItem: (state, { payload }) => {
      const itemId = payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },

    //TODO: 모든 아이템 제거(clear)
    clearCart: (state) => {
      state.cartItems = [];
    },

    //TODO: Total을 계산 SUM(각각 아이템 * 수량)
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });

      state.amount = amount;
      state.total = total;
    },
  },
});

export const { increase, decrease, removeItem, clearCart, calculateTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
