<template>
  <q-page padding>
    <div v-if="getSelectedProduct" class="q-pa-md">
      <div class="content-header shadow-card q-mb-md">
        <q-card class="my-card shadow-card-fix bg-gray">
          <q-card-section>
            <div class="text-h6 text-blue-grey-14 row items-center">
              <q-icon left name="developer_mode" color="blue-grey-14"></q-icon>
              <span>{{ getProductInfo.productName }}</span>
            </div>
          </q-card-section>
          <q-card-section>
            <div class="q-ml-xs">
              <span class="text-subtitle1 text-teal">OTA Url</span>
              <span class="q-ml-xl text-body1 text-blue">
                <q-icon size="24px" name="link"></q-icon>
                <a class="q-ml-sm">{{ getProductInfo.OTAUrl }}</a>
              </span>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="device-stats shadow-card q-mb-md">
        <q-card class="my-card shadow-card-fix">
          <q-card-section>
            <div class="text-h6 row items-center">
              <q-icon name="bar_chart" color="blue-grey-14"></q-icon>
              <span class="q-ml-sm text-blue-grey-14">Statistics</span>
            </div>
          </q-card-section>
          <q-card-section>
            <q-item
              v-for="stat in getProductStats"
              :key="stat.label"
              class="row"
            >
              <q-item-section class="text-body1">
                {{ stat.label }}
              </q-item-section>
              <q-item-section class="text-body1">
                {{ stat.value }}
              </q-item-section>
              <!-- <q-separator v-if="index != stats.length - 1"></q-separator> -->
            </q-item>
          </q-card-section>
        </q-card>
      </div>
      <div class="firmware-stats shadow-card q-mb-md">
        <q-card class="shadow-card-fix">
          <q-card-section>
            <div class="text-h6 text-blue-grey-14 row items-center">
              <q-icon name="insights" color="blue-grey-14"></q-icon>
              <span class="q-ml-sm">Active Firmwares</span>
            </div>
          </q-card-section>
          <q-card-section>
            <q-table
              :data="getFirmwaresWithDevices"
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
      <div class="chart-div shadow-card q-mb-md">
        <q-card class="my-card shadow-card-fix">
          <chart :chartData="chartData" :options="chartOptions"></chart>
        </q-card>
      </div>
    </div>
    <div v-else class="no-product-select ">
      <div>
        <div>
          <span class="animate__animated animate__tada"
            >Selected Product's info would be displayed here</span
          >
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import chart from "../components/Chart";
export default {
  data() {
    return {
      devicesQty: 50,
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
          style: ""
        },
        {
          name: "devices",
          required: true,
          label: "Number of devices Used",
          align: "center",
          field: row => row.devices,
          sortable: true
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
      ],
      chartData: {
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        datasets: [
          {
            backgroundColor: "rgb(183,118,176)",
            label: "Checked in Devices",
            data: [10, 20, 30, 23, 12, 3, 4]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  computed: {
    ...mapGetters({
      getSelectedProduct: "common/getSelectedProduct",
      getProductInfo: "products/getProductInfo",
      getProductStats: "products/getProductStats",
      getFirmwaresWithDevices: "products/getFirmwaresWithDevices"
    }),
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
  },
  components: {
    chart: chart
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
