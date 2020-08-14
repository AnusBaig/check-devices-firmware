
export function loadFirmwares (state,payload) {
  state.firmwares=payload;
}
export function addNewFirmware (state,payload){
  state.firmwares.push(payload);
}
export function saveReleaseNotes (state,payload){
  state.firmwares
  .find(firmware=>firmware.firmwareId==payload.firmwareId)
  .releaseNotes=payload.releaseNotes;
}


