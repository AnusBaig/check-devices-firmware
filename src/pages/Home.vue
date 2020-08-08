<template>
  <div class="q-pa-md">
    <div class="content-header q-mb-md">
      <q-card class="my-card bg-gray">
        <q-card-section>
          <div class="text-h6 row items-center">
            <q-icon left name="developer_mode"></q-icon>
            <span>Product X</span>
          </div>
        </q-card-section>
        <q-card-section>
          <div class="q-ml-xs">
            <span class="text-subtitle1 text-teal">OTA Url</span>
            <span class="q-ml-xl text-body1 text-blue"><q-icon size="24px" name="link"></q-icon><a class="q-ml-sm">{{OTAUrl}}</a></span>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="device-stats q-mb-md">
      <q-card class="my-card">
        <q-card-section>
          <div class="text-h6  row items-center">
            <q-icon  name="bar_chart"></q-icon>
            <span class="q-ml-sm">Statistics</span>
          </div>
        </q-card-section>
        <q-card-section>
          
          <q-item v-for="(stat) in stats" :key="stat.label" class="row ">
          <q-item-section class="text-body1">{{ stat.label }}</q-item-section>
          <q-item-section class="text-body1">{{ stat.value }}</q-item-section>
          <!-- <q-separator v-if="index != stats.length - 1"></q-separator> -->
          </q-item>
          
 
        </q-card-section>
      </q-card>
    </div>
    <div class="firmware-stats q-mb-md">
      <q-card>
      <q-card-section>
        <q-table
          title="Firmwares In Use"
          :data="data"
          :columns="columns"
          :table-header-class="{ 'font-larger': true }"
          :table-class="{ 'font-large': true }"
          row-key="name"
          hide-bottom
          flat
          square
        />
      </q-card-section>
    </q-card>
    </div>
    <div>
      <q-card class="my-card">
        <q-card-section horizontal>
           <q-card-section>
             <span class="text-body1">Total Binaries</span>
           </q-card-section>
          <q-card-section>
            <span class="text-body1">42</span>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      OTAUrl:"https://test.com/ota/48af3e",
      devicesQty: 50,
      productUrl: "https://test.com/ota/48af3e",
      currentFirmwareVersion: "v0.1.3",
      firmwares: {
        "v0.1.1": 500,
        "v0.1.2": 15,
        "v0.1.3": 20
      },
      firmwareBinariesQty: 3,
      activity: {},
      columns: [
        {
          name: "version",
          required: true,
          label: "Firmware Version",
          align: "center",
          field: row => row.name,
          style: ''
        },
        {
          name: "devices",
          required: true,
          label: "Number of devices Used",
          align: "center",
          field: row => row.devices,
          sortable: true,
    
        }
      ],
      data: [
        {
          name: "v0.1.1",
          devices: 500
        },
        {
          name: "v0.1.2",
          devices: 15
        },
        {
          name: "v0.1.3",
          devices: 20
        }
      ]
    };
  },
  computed: {
    stats() {
      return [
        {
          label: "Number of devices",
          value: this.devicesQty
        },
        {
          label: "Current firmware version",
          value: this.currentFirmwareVersion
        },
        {
          label: "Number of firmware binaries",
          value: this.firmwareBinariesQty
        }
      ];
    }
  }
};
</script>

<style scoped>
.font-larger {
  font-size: 18px !important;
}
.font-large {
  font-size: 16px !important;
}
</style>
