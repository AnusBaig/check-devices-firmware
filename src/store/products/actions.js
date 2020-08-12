import {v4} from 'uuid'

export function newProduct ({commit},payload) {
  payload={
    name:payload,
    OTAUrl:'https://somerthing//123de',
    devicesIds:[],
    currentFirmwareId:null,
    firmwaresIds:[]
  }
  payload.id=v4();
  commit('common/addProduct',payload,{ root:true });
  commit('SET_product',payload);
}

