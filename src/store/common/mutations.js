import { products } from "src/dummy";

export function initData (state,payload) {
  state.user.name=payload.user.name;
  state.products=payload.products;
  state.selectedProduct=payload.selectedProduct;
}

export function selectProduct(state,payload){
  state.selectedProduct=payload;
}

export function addNewProduct(state,payload){
  state.products.push(payload);
}

