<template>
  <div>
    <q-card>
      <q-card-section>
        <q-item v-for="stat in stats" :key="stat.label" class="row ">
          <q-item-section>{{ stat.label }}</q-item-section>
          <q-item-section>{{ stat.value }}</q-item-section>
        </q-item>
      </q-card-section>
      <q-card-section>
        <q-item v-for="(value, label) in firmwares" :key="label" class="row ">
          <q-item-section>{{ label }}</q-item-section>
          <q-item-section>{{ value }}</q-item-section>
        </q-item>
      </q-card-section>
      <q-card-section>
        <q-table
          title="Firmwares In Use"
          :data="data"
          :columns="columns"
          row-key="name"
          hide-bottom
          flat
          square
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
          field: row => row.name
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
          label: "Product URL",
          value: this.productUrl
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

<style scoped></style>
