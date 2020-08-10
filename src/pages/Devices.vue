<template>
  <q-page padding>
    <div class="firmware-stats q-mb-md">
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
              v-model="search.text"
              label="Search device"
              placeholder="Enter Device ID or Firmware version"
            >
              <template v-slot:append>
                <q-btn push round color="primary" icon="search" />
              </template>
            </q-input>
          </div>
          <div class="row justify-between">
            <div class="q-pl-md" style="max-width: 300px">
              <q-input
                v-model="search.checkInTime"
                label="Last Check-in time"
                placeholder="Last Check-in time"
                :dense="true"
                readonly
              >
                <template v-slot:prepend>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy ref="checkInDate">
                      >
                      <q-date
                        v-model="search.checkInTime"
                        mask="YYYY-MM-DD HH:mm"
                        @input="hidePicker($refs.checkInDate)"
                      />
                    </q-popup-proxy>
                  </q-icon>
                </template>

                <template v-slot:append>
                  <q-icon name="access_time" class="cursor-pointer">
                    <q-popup-proxy ref="checkInTime">
                      <q-time
                        v-model="search.checkInTime"
                        mask="YYYY-MM-DD HH:mm"
                        @input="hidePicker($refs.checkInTime)"
                      />
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
            <div class="q-pr-md" style="max-width: 300px">
              <q-input
                v-model="search.updateTime"
                label="Last Update time"
                placeholder="Last Update time"
                :dense="true"
                readonly
              >
                <template v-slot:prepend>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy ref="updateDate">
                      >
                      <q-date
                        v-model="search.updateTime"
                        mask="YYYY-MM-DD HH:mm"
                        @input="hidePicker($refs.updateDate)"
                      />
                    </q-popup-proxy>
                  </q-icon>
                </template>

                <template v-slot:append>
                  <q-icon name="access_time" class="cursor-pointer">
                    <q-popup-proxy ref="updateTime">
                      <q-time
                        v-model="search.updateTime"
                        mask="YYYY-MM-DD HH:mm"
                        @input="hidePicker($refs.updateTime)"
                      />
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <q-table
            :data="data"
            :columns="columns"
            :table-header-class="{ 'font-larger': true }"
            :table-class="{ 'font-large': true }"
            row-key="deviceID"
            :pagination.sync="pagination"
            flat
            square
          />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      search: {
        text: "",
        checkInTime: "",
        updateTime: "",
      },
      pagination: {
        rowsPerPage: 10,
      },
      columns: [
        {
          name: "deviceId",
          required: true,
          label: "Device ID",
          align: "center",
          field: (row) => row.deviceId,
          sortable: true,
        },
        {
          name: "firmwareVersion",
          required: true,
          label: "Firmware version",
          align: "center",
          field: (row) => row.firmwareVersion,
          sortable: true,
        },
        {
          name: "checkInTime",
          required: true,
          label: "Last check-in time",
          align: "center",
          field: (row) => row.checkInTime,
          sortable: true,
        },
        {
          name: "updateTime",
          required: true,
          label: "Last update time",
          align: "center",
          field: (row) => row.updateTime,
          sortable: true,
        },
      ],
      data: [
        {
          deviceId: "4B-DC-F8-05-6E-5F",
          firmwareVersion: "M_V3_P10",
          checkInTime: "Aug 09 2020 05:28",
          updateTime: "Aug 10 2020 15:42",
        },
        {
          deviceId: "8B-DC-D8-15-6E-5F",
          firmwareVersion: "M_V1_P7",
          checkInTime: "Aug 09 2020 20:28",
          updateTime: "Aug 12 2019 05:42",
        },
        {
          deviceId: "7B-DC-D4-50-6E-5F",
          firmwareVersion: "M_V2_P8",
          checkInTime: "Aug 19 2020 05:28",
          updateTime: "Aug 15 2020 23:42",
        },
      ],
    };
  },
  methods: {
    hidePicker(ref, value) {
      this.$nextTick(() => ref.hide());
    },
  },
};
</script>

<style scoped></style>
