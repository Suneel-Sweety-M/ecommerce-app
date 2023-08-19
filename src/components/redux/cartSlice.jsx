import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    totalQuantity: 0,
  },
  reducers: {
    update(state, action) {
      const itemExist = state.cartItems.findIndex(
        (item) => item.p.id === action.payload.p.id
      );

      if (itemExist >= 0) {
        state.cartItems[itemExist].itemQuantity += 1;
        toast.info("Increased Product Quantity", { position: "top-right" });
      } else {
        const tempItems = { ...action.payload, itemQuantity: 1 };
        state.cartItems.push(tempItems);
        toast.success("Added Product to Cart :)", { position: "top-right" });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    remove(state, action) {
      const leftItems = state.cartItems.filter(
        (cartItem) => cartItem.p.id !== action.payload.p.id
      );
      state.cartItems = leftItems;

      toast.success("Removed Product from Cart :)", { position: "top-right" });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    lessQty(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.p.id === action.payload.p.id
      );

      if (state.cartItems[itemIndex].itemQuantity > 1) {
        state.cartItems[itemIndex].itemQuantity -= 1;

        toast.info("Decreased Product Quantity.", { position: "top-right" });
      } else if (state.cartItems[itemIndex].itemQuantity === 1) {
        const leftItems = state.cartItems.filter(
          (cartItem) => cartItem.p.id !== action.payload.p.id
        );
        state.cartItems = leftItems;

        toast.error("Removed Product from Cart :)", { position: "top-right" });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    clearCart(state, action) {
      state.cartItems = [];

      toast.error("Clear all items from your Cart:(");
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { update, remove, lessQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
