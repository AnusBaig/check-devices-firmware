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

        <q-toolbar-title>Check Device Firmware</q-toolbar-title>
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
      <q-tabs v-model="tab" indicator-color="white" active-color="white" class="text-grey-5">
        <q-route-tab
          v-for="option in options"
          :to="option.to"
          :key="option.title"
          :icon="option.icon"
          :label="option.title"
        />
      </q-tabs>
    </q-footer>
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
      options: [
        {
          title: "Home",
          caption: "Dashboard - provides all devices info",
          icon: "dashboard",
          to: "/",
          link: () => this.$router.push({ name: "Home" }),
        },
        {
          title: "Devices",
          caption: "List of devices",
          icon: "devices",
          to: "/devices",
          link: () => this.$router.push({ name: "Devices" }),
        },
        {
          title: "Firmwares",
          caption: "Check firmware of device",
          icon: "insights",
          to: "/firmwaresOverview",
          link: () => this.$router.push({ name: "FirmwaresOverview" }),
        },
        {
          title: "Feedback",
          caption:
            "Submit feedback that you experienced for checking of your device firmware",
          icon: "feedback",
          to: "/feedback",
          link: () => this.$router.push({ name: "Feedback" }),
        },
        {
          title: "New Product",
          caption: "Add new product to your list",
          icon: "create",
          to: "/new_product",
          link: () => this.$router.push({ name: "NewProduct" }),
        },
      ],
    };
  },
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
