<template>
  <q-page padding>
    <div v-if="getSelectedProduct" class="firmware-stats q-mb-md">
      <q-card>
        <q-card-section>
          <div class="text-h6 row items-center">
            <q-icon name="insights"></q-icon>
            <span class="q-ml-sm">Active Devices</span>
          </div>
        </q-card-section>
        <q-card-section>
          <div class="q-pa-md w-50">
            <q-input
              v-model="filter"
              label="Search device"
              placeholder="Enter Device ID or Firmware version or Relevent Date"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
      
        </q-card-section>
        <q-card-section>
          <q-table
            :data="getAlldevices"
            :columns="columns"
            :table-header-class="{ 'font-larger': true }"
            :table-class="{ 'font-large': true }"
            :filter="filter"
            row-key="deviceID"
            :pagination.sync="pagination"
            flat
            square
          />
        </q-card-section>
      </q-card>
    </div>
    <div v-else>
      Associated Devices will be displayed here
    </div>
  </q-page>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
export default {
  data() {
    return {
      filter:"",
      pagination: {
        rowsPerPage: 10,
      },
      columns: [
        {
          name: "id",
          required: true,
          label: "Device ID",
          align: "center",
          field: (row) => row.id,
          sortable: true,
        },
        {
          name: "version",
          required: true,
          label: "Firmware version",
          align: "center",
          field: (row) => row.version,
          sortable: true,
        },
        {
          name: "lastCheckInTime",
          required: true,
          label: "Last check-in time",
          align: "center",
          field: (row) => row.lastCheckInTime,
          sortable: true,
        },
        {
          name: "lastUpdate",
          required: true,
          label: "Last update time",
          align: "center",
          field: (row) => row.lastUpdate,
          sortable: true,
        },
      ]
    };
  },
  methods: {

  },
  computed:{
    ...mapGetters({
      getSelectedProduct:"common/getSelectedProduct",
      getAlldevices:"products/getAllDevices"
    })
  }
};
</script>

<style scoped></style>
