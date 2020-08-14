<template>
  <q-page padding>
    <div v-if="getSelectedProduct">
    <div @click.stop="onCardClick">
      <q-card flat square>
        <q-card-section class="row items-center">
          <q-avatar
            size="42px"
            font-size="24px"
            color="green"
            text-color="white"
            icon="fact_check"
          /><span class="q-ml-md text-h6">Active Firmwares</span>
        </q-card-section>
        <q-card-section>
          <div class="row q-gutter-sm">
            <q-card
              v-for="firmware in getActiveFirmwares"
              :data-id="firmware.firmwareId"
              :key="firmware.version"
              class="firmwareCard col-3 "
            >
              <q-card-section>
                <div class="text-h6 row items-center">
                  <span> v{{ firmware.version }} </span>
                  <q-icon
                    v-if="firmware.firmwareId == getCurrentFirmware.id"
                    name="check_circle"
                    class="text-green q-ml-auto"
                  />
                </div>
                <div class="text-subtitle1">
                  Total Devices : {{ firmware.numberOfDevices }}
                </div>
              </q-card-section>
              <q-card-section>
                <div class="text-subtitle1">Release Notes</div>
                {{firmware.releaseNotes}}
              </q-card-section>
            </q-card>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div>
      <q-card flat square>
        <q-card-section class="row items-center">
          <q-avatar
            size="42px"
            font-size="24px"
            color="red"
            text-color="white"
            icon="warning"
          /><span class="q-ml-md text-h6">Inactive Firmwares</span>
        </q-card-section>
        <q-card-section>
          <q-table
            ref="table"
            :data="getInactiveFirmwares"
            row-key="name"
            class="q-pa-md"
            :columns="columns"
            :visible-columns="visibleColumns"
            no-data-label="No inactive devices found!"
            @row-click="onRowClick"
          />
        </q-card-section>
      </q-card>
    </div>
    <div class="newFirmware">
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn
          @click="open = true"
          fab
          icon="add"
          color="accent"
          label="Add New Firmware"
        />
      </q-page-sticky>
    </div>
    <div class="dialogDiv">
      <q-dialog
        v-model="open"
        :maximized="true"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-card style="min-width:600px" class="q-pa-md">
          <q-bar class="bg-white">
            <q-space />
            <div class="row items-center">
              <q-avatar icon="devices" color="teal" text-color="white" />
              <span class="q-ml-sm text-body1 ">New Firmware</span>
            </div>
            <q-space />
            <q-btn dense flat icon="close" color="text-purple" v-close-popup>
              <q-tooltip content-class="bg-white text-purple">Close</q-tooltip>
            </q-btn>
          </q-bar>
          <q-card-section>
            <div class="versionDiv q-my-sm">
              <div class="text-body1">Version</div>
              <q-input
                style="max-width:300px"
                v-model="newVersion"
                label="Firmware Version"
              >
                <template v-slot:prepend>
                  <q-icon name="settings" />
                </template>
              </q-input>
              <q-checkbox
                class=""
                left-label
                v-model="makeDefaultFirmware"
                label="Mark Default"
              />
            </div>
            <div class="fileDiv q-my-sm ">
              <div class="text-body1 q-mb-sm">File</div>
              <q-file
                v-model="BinaryFile"
                label="Pick file"
                filled
                counter
                :counter-label="counterLabelFn"
                max-files="1"
                style="max-width: 300px"
              >
                <template v-slot:prepend>
                  <q-icon name="attach_file" />
                </template>
              </q-file>
            </div>
            <div class="q-mb-sm">
              <span class="text-body1">Release Notes</span>
            </div>
            <div class="editorHolder" style="overflow:hidden;">
              <ckeditor
                :editor="editor"
                v-model="editorData"
                :config="editorConfig"
              ></ckeditor>
            </div>
          </q-card-section>
          <q-card-section class="row items-center justify-center">
            <q-btn
              unelevated
              class="q-px-md "
              size=".8rem"
              icon-right="check_circle"
              align="center"
              color="purple"
              label="Add"
              @click="newFirmware({editorData,BinaryFile,newVersion,makeDefaultFirmware})"
            />
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
    </div>
    <div v-else>
      Selected Product's Details would be displayed here
    </div>
  </q-page>
</template>

<script>
import { mapGetters,mapActions } from "vuex"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";


export default {
  data() {
    return {
 

      editor: ClassicEditor,
      editorData: "<p>Release Notes..</p>",
      editorConfig: {
        // The configuration of the editor.
      },
      //new firmware
      open: false,
      newVersion: "",
      BinaryFile: null,
      makeDefaultFirmware: false,

      visibleColumns:["version","releaseNotes"],
      columns: [
        {
          name: "version",
          label: "Version",
          align: "center",
          sortable: true,
          field: row => row.version
        },
        {
          name: "releaseNotes",
          label: "Release Notes",
          align: "center",
          field: row => row.releaseNotes
        },
        {
          name: "firmwareId",
          label: "Release Notes",
          align: "center",
          field: row => row.firmwareId
        }
      ]
    };
  },
  computed:{
    ...mapGetters({
      getSelectedProduct:"common/getSelectedProduct",
      getActiveFirmwares:"firmwares/getActiveFirmwares",
      getInactiveFirmwares:"firmwares/getInactiveFirmwares",
      getCurrentFirmware:"products/getCurrentFirmware"
    })
  },
  methods: {
    ...mapActions({
      newFirmware:"firmwares/newFirmware"
    }),
    counterLabelFn({ totalSize, filesNumber, maxFiles }) {
      return `${totalSize}`;
    },
    onRowClick(evt, row) {
      console.log("Clicked On", row.version);
    },
    onCardClick(event) {
      if(event.target.closest(".firmwareCard"))
      {
        const firmwareId=event.target.closest(".firmwareCard").dataset.id;
        this.$router.push({ name: 'Firmwares', params: { id: firmwareId } });
      }
    }
  }
};
</script>

<style>
.ck-content {
  min-height: 6rem !important;
}
</style>
