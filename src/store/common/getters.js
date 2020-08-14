
export function getSelectedProduct (state) {
  return state.selectedProduct;
}
export function getAllProducts(state){
  return state.products.map(val=>{
    return {
      label:val.name,
      value:val.id
    }
  });
}
