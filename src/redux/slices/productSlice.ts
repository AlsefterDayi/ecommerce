import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  SetProductCountEnum,
  type IProduct,
  type IProductParams,
} from "../../Modules/Shop/Models/ShopModels";
import showNotification from "../../utils/notification";

export interface IProductState {
  cart: IProduct[];
  cartCount: number;
  totalPrice: number;
}

const initialState: IProductState = {
  cart: JSON.parse(localStorage.getItem("basketItems") || "[]"),
  cartCount: JSON.parse(localStorage.getItem("basketCount") || "0"),
  totalPrice: JSON.parse(localStorage.getItem("basketTotalPrice") || "0"),
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    calculateCartCount: (state) => {
      state.cartCount = state.cart.reduce(
        (acc, curr) => acc + (curr.quantity || 0),
        0
      );
      localStorage.setItem("basketCount", JSON.stringify(state.cartCount));
    },
    calculateCartTotalPrice: (state) => {
      state.totalPrice = state.cart.reduce(
        (acc, curr) => acc + curr.price * (curr.quantity || 0),
        0
      );
      localStorage.setItem(
        "basketTotalPrice",
        JSON.stringify(state.totalPrice)
      );
    },
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existing = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (existing) {
        state.cart = state.cart.filter((item) => {
          if (item._id === existing._id && item.quantity) {
            return { ...item, quantity: item.quantity++ };
          } else {
            return item;
          }
        });
      } else {
        state.cart = [...state.cart, { ...action.payload, quantity: 1 }];
      }
      localStorage.setItem("basketItems", JSON.stringify(state.cart));
      productSlice.caseReducers.calculateCartCount(state);
      productSlice.caseReducers.calculateCartTotalPrice(state);
      showNotification("success", "Sebete elave olundu !");
    },
    setProductCount: (state, action: PayloadAction<IProductParams>) => {
      const findedProduct = state.cart.find(
        (item) => item._id === action.payload.productId
      );
      switch (action.payload.countType) {
        case SetProductCountEnum.INCREMENT:
          state.cart = state.cart.filter((item) => {
            if (item._id === findedProduct?._id && item.quantity) {
              return { ...item, quantity: item.quantity++ };
            } else {
              return item;
            }
          });
          break;
        case SetProductCountEnum.DECREMENT:
          state.cart = state.cart.filter((item) => {
            if (
              item._id === findedProduct?._id &&
              item.quantity &&
              item.quantity > 1
            ) {
              return { ...item, quantity: item.quantity-- };
            } else {
              return item;
            }
          });
          break;
        default:
          console.log("Error");
      }
      productSlice.caseReducers.calculateCartCount(state);
      productSlice.caseReducers.calculateCartTotalPrice(state);
      localStorage.setItem("basketItems", JSON.stringify(state.cart));
      localStorage.setItem("basketCount", JSON.stringify(state.cartCount));
      localStorage.setItem(
        "basketTotalPrice",
        JSON.stringify(state.totalPrice)
      );
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
      productSlice.caseReducers.calculateCartCount(state);
      productSlice.caseReducers.calculateCartTotalPrice(state);
      localStorage.setItem("basketItems", JSON.stringify(state.cart));
      localStorage.setItem("basketCount", JSON.stringify(state.cartCount));
      localStorage.setItem(
        "basketTotalPrice",
        JSON.stringify(state.totalPrice)
      );
      showNotification("info", "Mehsul sebetden silindi !");
    },
    clearCart: (state) => {
      state.cart = [];
      productSlice.caseReducers.calculateCartCount(state);
      productSlice.caseReducers.calculateCartTotalPrice(state);
      localStorage.setItem("basketItems", JSON.stringify(state.cart));
      localStorage.setItem("basketCount", JSON.stringify(state.cartCount));
      localStorage.setItem(
        "basketTotalPrice",
        JSON.stringify(state.totalPrice)
      );
    },
  },
});

export const { addToCart, removeFromCart, setProductCount, clearCart } =
  productSlice.actions;

export default productSlice.reducer;
