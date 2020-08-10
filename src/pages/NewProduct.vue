<template>
  <q-dialog v-model="prompt" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">New Product</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input
          dense
          v-model="name"
          label="Name"
          autofocus
          @keyup.enter="prompt = false"
        />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" @click="$router.push({ name: 'Home' })" />
        <q-btn flat label="Add product" @click="addProduct" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  data() {
    return {
      prompt: true,
      name: null
    };
  },
  methods: {
    addProduct() {
      if (this.name && this.name.length >= 3) {
        this.$router.push({ name: "FirmwaresOverview" });
      }
    }
  }
};
</script>

<style scoped></style>
