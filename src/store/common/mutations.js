
export function initData (state,payload) {
  console.log(payload);
  state.user.name=payload.name;
  state.user.productIds=payload.productIds;
  state.selectedProduct=payload.selectedProduct;
}

