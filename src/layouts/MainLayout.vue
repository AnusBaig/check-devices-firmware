<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-select
          rounded
          outlined
          v-model="selectedProduct"
          placeholder="Select Product"
          use-input
          hide-selected
          transition-show="jump-up"
          transition-hide="jump-up"
          fill-input
          @filter="filterFn"
          @input-value="setModel"
          bg-color="white"
          input-debounce="0"
          :options="productSelection"
          class="cursor-pointer q-px-lg q-py-sm"
          style="width: 20vw;min-width:240px"
        >
          <template v-slot:prepend>
            <q-icon name="trip_origin" class="cursor_pointer" color="blue-5" />
          </template>
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey">No product</q-item-section>
            </q-item>
          </template>
        </q-select>

        <q-toolbar-title class="text-center"
          >Check Device Firmware</q-toolbar-title
        >
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :mini="miniState"
      mini-to-overlay
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      :width="200"
      :breakpoint="767"
      bordered
      active
      content-class="bg-grey-3"
    >
      <q-list>
        <q-item
          v-for="option in options"
          :key="option.title"
          v-ripple
          clickable
          @click="option.link"
        >
          <q-item-section v-if="option.icon" avatar>
            <q-icon :name="option.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ option.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated :breakpoint="200">
      <q-tabs
        v-model="tab"
        indicator-color="white"
        active-color="white"
        class="text-grey-5"
      >
        <q-tab
          v-for="option in options"
          @click="option.link"
          :key="option.title"
          :icon="option.icon"
          :label="option.title"
        />
      </q-tabs>
    </q-footer>

    <q-dialog v-model="prompt">
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
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",

  components: {},

  data() {
    return {
      leftDrawerOpen: false,
      miniState: true,
      tab: null,
      options: [
        {
          title: "Home",
          caption: "Dashboard - provides all devices info",
          icon: "dashboard",
          to: "/",
          link: () => this.$router.push({ name: "Home" })
        },
        {
          title: "Devices",
          caption: "List of devices",
          icon: "devices",
          to: "/devices",
          link: () => this.$router.push({ name: "Devices" })
        },
        {
          title: "Firmwares",
          caption: "Check firmware of device",
          icon: "insights",
          to: "/firmwaresOverview",
          link: () => this.$router.push({ name: "FirmwaresOverview" })
        },
        {
          title: "Feedback",
          caption:
            "Submit feedback that you experienced for checking of your device firmware",
          icon: "feedback",
          to: "/feedback",
          link: () => this.$router.push({ name: "Feedback" })
        },
        {
          title: "New Product",
          caption: "Add new product to your list",
          icon: "create",
          link: () => (this.prompt = true)
        }
      ],

      selectedProduct: null,
      products: [
        "Product 1",
        "Product 2",
        "Product 3",
        "Product 4",
        "Smart Product 1",
        "Smart Product 2"
      ],
      productSelection: this.products,

      prompt: false,
      name: null
    };
  },
  methods: {
    addProduct() {
      if (this.name && this.name.length >= 3) {
        this.$router.push({ name: "FirmwaresOverview" });
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "New Product added"
        });
        this.name = null;
      } else {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Please add the complete name of product"
        });
      }
    },
    filterFn(val, update) {
      if (val === "") {
        update(() => {
          this.productSelection = this.products;

          // with Quasar v1.7.4+
          // here you have access to "ref" which
          // is the Vue reference of the QSelect
        });
        return;
      }

      update(() => {
        const needle = val.toLowerCase();
        this.productSelection = this.products.filter(
          v => v.toLowerCase().indexOf(needle) > -1
        );
      });
    },
    setModel(val) {
      this.selectedProduct = val;
    }
  }
};
</script>

<style scoped>
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}
@media screen and (max-width: 767px) {
  .q-btn {
    display: none;
  }
}
</style>
