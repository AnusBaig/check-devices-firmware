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
            <span class="text-body1"> 1.2.5</span>
        </div>
        <div class="row items-center q-mb-md q-gutter-lg">
            <span class="text-body1"> Number of devices:</span>
            <span class="text-body1"> 24</span>
        </div>
        <div class="row items-center q-mb-md q-gutter-lg">
            <span class="text-body1"> Signed:</span>
            <q-icon name="check_circle" color="green" size="20px" />
        </div>
        <div class="row items-center q-mb-md q-gutter-lg">
            <span class="text-body1"> Size:</span>
            <span class="text-body1"> 32Kb</span>
        </div>
        <div class="row items-center q-mb-md q-gutter-lg">
            <span class="text-body1"> Created Date:</span>
            <span class="text-body1"> {{new Date()}}</span>
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
          <q-btn v-if="editMode==true" dense unelevated  color="green" icon="save" label="Save" @click="editMode=false" />
        </div>
        <div class="editorHolder">
        <ckeditor v-if="editMode" :editor="editor"   v-model="editedReleaseData" :config="editorConfig"></ckeditor>
        <div class="releaseNotesDisplay q-pa-md" v-html="editedReleaseData" v-else>
        </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import Ckeditor from "@ckeditor/ckeditor5-build-classic"

export default {
  data(){
    return{
      editMode:false,

      editor: Ckeditor,
      editedReleaseData: '<p>Release Notes..</p>',
      editorConfig: {
        // The configuration of the editor.
        placeholder:"Release Notes"
      }
    }
  },
  props:['id']
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