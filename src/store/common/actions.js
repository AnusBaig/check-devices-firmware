import {products} from '../../dummy'

export function initializeData ({commit},payload) {
  // Inserting Dummy data
    localStorage.setItem("products",JSON.stringify(products));
  //
  commit('initData',payload);
};
export function selectProduct({commit},payload){
  /*
    Api call api.call(param:{id:payload}).then(data=>{

    })
  */
  var product=JSON.parse(localStorage.getItem("products"))
              .find((val)=>val.id==payload);
  
  commit('selectProduct',payload);
  commit('products/updateProductInfo',
  {
     id:product.id,
     name:product.name,
     OTAUrl:product.OTAUrl
   },
   {root:true}
   );
  commit('products/loadDevices',product.devices,{root:true});
  commit('products/updateBinariesCount',product.totalFirmwareBinaries,{root:true});
}
