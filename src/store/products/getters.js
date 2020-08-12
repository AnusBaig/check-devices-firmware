
export function getProductInfo (state) {
  return {
    productName:state.name,
    OTAUrl:state.OTAUrl
}
}
export function getProductStats (state){
  //working pending
  return[
    
   {
     label:'Number of Devices',
     value:state.devices.length
   },
   {
     label:'Current Firmware',
     value:state.currentFirmwareId
   },
   {
     label:'Total Binaries',
     value:state.totalBinaries
   }
  ]
}
export function getFirmwaresWithDevices (state){
  const ids=[];
  state.devices.forEach((val)=>ids.push(val.firmwareId));
  const uniqueIds=[...new Set(ids)];
  const firmwaresWithDevices=[];
  uniqueIds.forEach(v=>{
    const count=state.devices.filter((x)=>{
      return x.firmwareId==v;
    }).length;
    const version=state.devices.find((y)=>y.firmwareId==v).version;
    firmwaresWithDevices.push({
      name:version,
      devices:count
    });
  });
  return firmwaresWithDevices;
}
export function getAllDevices (state){
  return state.devices;
}

