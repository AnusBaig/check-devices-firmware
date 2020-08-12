import { products } from "src/dummy";

export function initData (state,payload) {
  state.user.name=payload.user.name;
  state.products=payload.products;
  state.selectedProduct=payload.selectedProduct;
}

export function selectProduct(state,payload){
  state.selectedProduct=payload;
}

export function addProduct(state,payload){

  state.user.productIds.push(payload.id);
  state.selectedProduct=payload.id;

  //localStorage
  var JSONarray=localStorage.getItem("products");
  var products=JSON.parse(JSONarray);
  if(!products){
    //if null
    localStorage.setItem("products",JSON.stringify([payload]));
  }
  else if(products.length==0){
    localStorage.setItem("products",JSON.stringify([payload]));
  }
  else{
    products.push(payload);
    localStorage.setItem("products",JSON.stringify(products));
  }
}

