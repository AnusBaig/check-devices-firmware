import {products} from '../../dummy'
import {productsFirmwares} from '../../dummy'

export function initializeData ({commit},payload) {
  // Inserting Dummy data
    localStorage.setItem("products",JSON.stringify(products));
    localStorage.setItem("productsFirmwares",JSON.stringify(productsFirmwares));
  //
  commit('initData',payload);
};
export function selectProduct({commit},payload){
  /*
    Api call api.callForProduct(param:{productid:payload}).then(data=>{

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
  commit('products/updateCurrentFirmwareInfo',product.currentFirmware,{root:true});
  if(this.$router.currentRoute.name=="FirmwaresOverview")
  {
    //Api.callforFirmwares(param:{productid:payload})
    var firmwares=JSON.parse(localStorage.getItem("productsFirmwares")).find(v=>v.productId==payload).firmwares;
    commit('firmwares/loadFirmwares',firmwares,{root:true});
  }
}
