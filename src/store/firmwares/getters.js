
export function getActiveFirmwares (state) {
  return state.firmwares
  .filter((val)=> val.deviceIds.length!=0)
  .map(firmware=>{
    return {
      version:firmware.version,
      numberOfDevices:firmware.deviceIds.length,
      releaseNotes:firmware.releaseNotes,
      firmwareId:firmware.firmwareId
    }
  })
  .sort((a,b)=>{
    return b.numberOfDevices-a.numberOfDevices
  });
}
export function getInactiveFirmwares (state){
  return state.firmwares
  .filter((val)=> val.deviceIds.length==0)
  .map(firmware=>{
    return {
      version:firmware.version,
      releaseNotes:firmware.releaseNotes,
      firmwareId:firmware.firmwareId
    }
  })
}
export function getFirmwareInfo(state){
  
  return function(payload){
    return state.firmwares.find(firmware=>firmware.firmwareId==payload);
  }
}