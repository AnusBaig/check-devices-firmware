import {v4} from 'uuid'




export function newFirmware ({commit,rootGetters},payload) {
  /*
    make apicall for newfirmware and return new firmware's id i am simulating this with uuid
   */
  

   const newFirmwareId=v4();
   if(payload.makeDefaultFirmware)
   {
   commit("products/updateCurrentFirmwareInfo",{ id:newFirmwareId,version:payload.newVersion },{root:true});
   }
   commit("products/incrementFirmwareCount",payload,{root:true});

   const createdDate=new Date();
   const size=`${payload.BinaryFile.size/1000}Kb`;
   const deviceIds=[];
   const signed=false;

   const firmware={
     createdDate,
     size,
     deviceIds,
     signed,
     firmwareId:newFirmwareId,
     releaseNotes:payload.editorData,
     version:payload.newVersion,
     binary:payload.BinaryFile
   }
   
   const selectedProductId=rootGetters["common/getSelectedProduct"];

   const products=JSON.parse(localStorage.getItem("productsFirmwares"));
   const requiredProduct=products.find(val=>val.productId==selectedProductId);
   requiredProduct.firmwares.push(firmware);
   localStorage.setItem("productsFirmwares",JSON.stringify(products));

   //updateBinariesCount
   const allProducts=JSON.parse(localStorage.getItem("products"));
   allProducts.find(val=>val.id==selectedProductId).totalFirmwareBinaries++;
   localStorage.setItem("products",JSON.stringify(allProducts));

   commit("firmwares/addNewFirmware",firmware,{root:true});


}
export function saveReleaseNotes ({commit},payload){
  commit("saveReleaseNotes",payload);
}

