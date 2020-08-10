<template>
  <q-page padding>
    <div @click.stop="onCardClick">
      <q-card flat square>
        <q-card-section class="row items-center">
          <q-avatar size="42px" font-size="24px" color="green" text-color="white" icon="fact_check" /><span
            class="q-ml-md text-h6">Active Firmwares</span>
        </q-card-section>
        <q-card-section>
          <div class="row q-gutter-sm">
            <q-card v-for="firmware in activeFirmwares" :data-id="firmware.version" :key="firmware.version"
              class="firmwareCard col-3 ">
              <q-card-section>
                <div class="text-h6 row items-center">
                  <span>
                    v{{firmware.version}}
                  </span>
                  <q-icon v-if="firmware.version==defaultVersion" name="check_circle" class="text-green q-ml-auto" />
                </div>
                <div class="text-subtitle1">Total Devices : {{firmware.numberOfDevices}}</div>
              </q-card-section>
              <q-card-section>
                <div class="text-subtitle1">Release Notes</div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </q-card-section>
            </q-card>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div>
      <q-card flat square>
        <q-card-section class="row items-center">
          <q-avatar size="42px" font-size="24px" color="red" text-color="white" icon="warning" /><span
            class="q-ml-md text-h6">Inactive Firmwares</span>
        </q-card-section>
        <q-card-section>
          <q-table ref="table" :data="data" row-key="name" class="q-pa-md" :columns="columns" @row-click="onRowClick" />
        </q-card-section>


      </q-card>
    </div>
    <div class="newFirmware">
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn @click="open=true" fab icon="add" color="accent" label="Add New Firmware" />
      </q-page-sticky>
    </div>
    <div class="dialogDiv">
      <q-dialog v-model="open"       
      :maximized=true
      transition-show="slide-up"
      transition-hide="slide-down">
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
              <q-input style="max-width:300px" v-model="newVersion" label="Firmware Version">
                <template v-slot:prepend>
                  <q-icon name="settings" />
                </template>
              </q-input>
                   <q-checkbox class="" left-label v-model="makeDefaultFimware" label="Mark Default" />
            </div>
            <div class="fileDiv q-my-sm ">
              <div class="text-body1 q-mb-sm">File</div>
              <q-file v-model="BinaryFile" label="Pick file" filled counter :counter-label="counterLabelFn"
                max-files="1" style="max-width: 300px">

                <template v-slot:prepend>
                  <q-icon name="attach_file" />
                </template>
              </q-file>
            </div>
              <div class="q-mb-sm">
                <span class="text-body1">Release Notes</span>
              </div>
              <div class="editorHolder" style="overflow:hidden;">
                  <ckeditor :editor="editor"  v-model="editorData" :config="editorConfig"></ckeditor>
              </div>
          </q-card-section>
          <q-card-section class="row items-center justify-center">
            
          
            <q-btn unelevated class="q-px-md " size=".8rem" icon-right="check_circle" align="center" color="purple" label="Add" @click="newFirmware"/>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  data(){
    return {
      makeDefaultFimware:false,

      editor: ClassicEditor,
      editorData: '<p>Release Notes..</p>',
      editorConfig: {
        // The configuration of the editor.
      },
      open:false,
      newVersion:'',
      defaultVersion:'1.2.3',
      BinaryFile:null,
      activeFirmwares:[
        {
          version:'1.2.3',
          numberOfDevices:23,
          releaseNotes:'lorem ipsum dotem ...'
        },
        {
          version:'2.2.3',
          numberOfDevices:31,
          releaseNotes:'lorem ipsum dotem ...'
        },
        {
          version:'4.2.3',
          numberOfDevices:45,
          releaseNotes:'lorem ipsum dotem ...'
        },
        {
          version:'5.2.3',
          numberOfDevices:45,
          releaseNotes:'lorem ipsum dotem ...'
        }         
      ],
      columns:[
        {
          name:'version',
          label:'Version',
          align:'center',
          sortable:true,
          field:row=>row.version

        },
        {
          name:'numberOfDevices',
          label:'Devices Count',
          align:'center',
          field:row=>row.numberOfDevices
        },
        {
          name:'releaseNotes',
          label:'Release Notes',
          align:'center',
          field:row=>row.releaseNotes
        },
      ],
      data:[
        {
          version:'0.0.1',
          numberOfDevices:4,
          releaseNotes:'lorem ipsum dotem ...'
        },
        {
          version:'0.0.2',
          numberOfDevices:5,
          releaseNotes:'lorem ipsum dotem ...'
        },
        {
          version:'0.0.3',
          numberOfDevices:0,
          releaseNotes:'lorem ipsum dotem ...'
        }        
      ]
    }
  },
  methods:{
    counterLabelFn ({ totalSize, filesNumber, maxFiles }) {
      return `${totalSize}`
    },
    onRowClick(evt,row){
      console.log('Clicked On',row.version);
    },
    onCardClick(event){
      console.log(event.target.closest(".firmwareCard").dataset.id);
    },
    newFirmware(){
      console.log('firware');
    }
  }
}
</script>

<style >
 .ck-content{
    min-height: 6rem !important;
}
</style>