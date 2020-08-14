<template>
  <q-page padding>
    <q-card class="my-card">
      <q-card-section>
        <div class="row items-center justify-center">
         <q-icon name="devices" left size="28px" />
         <span class="text-h6">Firmware Details</span>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row items-center q-mb-md q-gutter-lg">
            <span class="text-body1"> Version:</span>
            <span class="text-body1"> {{firmwareInfo(id).version}}</span>
        </div>
        <div class="row items-center q-mb-md q-gutter-lg">
            <span class="text-body1"> Number of devices:</span>
            <span class="text-body1"> {{firmwareInfo(id).deviceIds.length}}</span>
        </div>
        <div class="row items-center q-mb-md q-gutter-lg">
            <span class="text-body1"> Signed:</span>
            <q-icon v-if="firmwareInfo(id).signed" name="check_circle" color="green" size="20px" />
            <q-icon v-else name="cancel" color="red" size="20px" />
        </div>
        <div class="row items-center q-mb-md q-gutter-lg">
            <span class="text-body1"> Size:</span>
            <span class="text-body1"> {{firmwareInfo(id).size}}</span>
        </div>
        <div class="row items-center q-mb-md q-gutter-lg">
            <span class="text-body1"> Created Date:</span>
            <span class="text-body1"> {{firmwareInfo(id).createdDate}}</span>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row q-mb-md items-center q-gutter-sm">
          <span class="text-h6">Release Notes</span>
          <q-btn v-if="editMode==false"  color="purple" unelevated size="sm" @click="editMode=true"  round icon="edit" >
            <q-tooltip >
              Edit Release Notes
            </q-tooltip>
          </q-btn>
          <q-btn v-if="editMode==true" dense unelevated  color="green" icon="save" label="Save" @click="saveData" />
        </div>
        <div class="editorHolder">
        <ckeditor v-if="editMode" :editor="editor" v-model="editedReleaseData" :config="editorConfig"></ckeditor>
        <div class="releaseNotesDisplay q-pa-md" v-html="editedReleaseData" v-else>
        </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import Ckeditor from "@ckeditor/ckeditor5-build-classic"
import { mapGetters,mapActions } from "vuex"

export default {
  data(){
    return{
      editMode:false,

      editor: Ckeditor,
      editedReleaseData: '',
      editorConfig: {
        // The configuration of the editor.
        placeholder:"Release Notes"
      }
    }
  },
  props:['id'],
  mounted(to,from,next){
    if(this.getSelectedProduct){
      this.editedReleaseData=this.firmwareInfo(this.id).releaseNotes;
    }
  },
  computed:{
    ...mapGetters({
      firmwareInfo:"firmwares/getFirmwareInfo",
      getSelectedProduct:"common/getSelectedProduct"
    })
  },
  methods:{
    ...mapActions({
      saveReleaseNotes:"firmwares/saveReleaseNotes"
    }),
    saveData(){
      this.saveReleaseNotes({releaseNotes:this.editedReleaseData,firmwareId:this.id});
      this.editMode=false;

    }
  }
}
</script>
<style >
 .ck-content{
    min-height: 6rem !important;
}
.releaseNotesDisplay{
  border: 1px solid purple;
  border-radius: 2px ;
}
</style>