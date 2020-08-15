import {
  v4
} from 'uuid'


export function newProduct({
  commit
}, payload) {
  const newProduct = {
    id: v4(),
    OTAUrl: 'https://somerthing//123de',
    currentFirmware: {
      id: -1,
      version: "Not specified"
    },
    devices: [],
    name: payload,
    totalFirmwareBinaries: 0
  }

  /*api call to add new product and then return id */
  const updatedProduct = JSON.parse(localStorage.getItem("products"));
  updatedProduct.push(newProduct);
  localStorage.setItem("products", JSON.stringify(updatedProduct));

  const updatedFirmware = JSON.parse(localStorage.getItem("productsFirmwares"));
  updatedFirmware.push({
    productId: newProduct.id,
    firmwares: []
  });
  localStorage.setItem("productsFirmwares", JSON.stringify(updatedFirmware));

  commit("common/addNewProduct", {
    id: newProduct.id,
    name: payload
  }, {
    root: true
  });
  commit("common/selectProduct", newProduct.id, {
    root: true
  });

  commit("updateProductInfo", {
    name: newProduct.name,
    OTAUrl: newProduct.OTAUrl,
    id: newProduct.id
  });
  commit("updateBinariesCount", newProduct.totalFirmwareBinaries);
  commit("updateCurrentFirmwareInfo", newProduct.currentFirmware);
  commit("loadDevices", newProduct.devices);
}
