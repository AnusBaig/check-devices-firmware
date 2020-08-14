
export function updateProductInfo(state,payload){
  state.name=payload.name;
  state.OTAUrl=payload.OTAUrl;
  state.Id=payload.id
}
export function loadDevices(state,payload){
  state.devices=payload;
}
export function updateBinariesCount(state,payload){
  state.totalBinaries=payload;
}
export function updateCurrentFirmwareInfo(state,payload){
  state.currentFirmware=payload;
}
export function incrementFirmwareCount(state,payload){
  state.totalBinaries++;
}