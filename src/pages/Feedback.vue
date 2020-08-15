<template>
  <q-page padding>
    <div class="q-pa-lg q-mx-auto adjustForm">
      <div class="shadow-card">
        <q-card class="q-pa-md shadow-card-fix">
          <q-card-section class="text-center q-pt-xs">
            <h4 class="text-secondary font-helvetica">
              Should you have face any issue, feel free to contact us, we will
              get back to you as soon as we can!
            </h4>
          </q-card-section>
          <q-card-section>
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
              <q-input v-model="name" label="Name" />
              <q-input v-model="email" label="Email" class="q-py-md" />
              <q-item-label class="q-pt-lg"
                >Select what problems you are facing</q-item-label
              >
              <q-option-group
                v-model="problems"
                :options="options"
                color="blue"
                type="checkbox"
              />

              <q-input
                v-model="comments"
                filled
                clearable
                type="textarea"
                color="blue"
                label="Any comments"
                :shadow-text="textareaShadowText"
                @keydown="processTextareaFill"
                @focus="processTextareaFill"
              />

              <div>
                <q-btn label="Submit" type="submit" color="secondary" />
                <q-btn
                  label="Reset"
                  type="reset"
                  color="secondary"
                  flat
                  class="q-ml-sm"
                />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      email: null,

      problems: [],
      options: [
        {
          label: "Product selection doesn't affect the device captured list",
          value: "Product selection doesn't affect the device captured list"
        },
        {
          label: "All devices are not available for the selected product",
          value: "All devices are not available for the selected product"
        },
        {
          label: "Firmwares bundles are outdated that has been obsolete",
          value: "Firmwares bundles are outdated that has been obsolete"
        }
      ],

      comments: "",
      textareaFillCancelled: false
    };
  },

  computed: {
    textareaShadowText() {
      if (this.textareaFillCancelled === true) {
        return "";
      }

      const t = "",
        empty = typeof this.comments !== "string" || this.comments.length === 0;

      if (empty === true) {
        return t.split("\n")[0];
      } else if (t.indexOf(this.comments) !== 0) {
        return "";
      }

      return t
        .split(this.comments)
        .slice(1)
        .join(this.comments)
        .split("\n")[0];
    }
  },

  methods: {
    onSubmit() {
      if (this.problems.length >= 1 || this.comments.length > 10) {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted"
        });
        this.onReset();
      } else {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message:
            "You need to provide any suggestion or select atleast one problem"
        });
      }
    },

    onReset() {
      this.name = null;
      this.email = null;
      this.comments = null;
      this.problems = [];
    },

    processTextareaFill(e) {
      if (e === void 0) {
        return;
      }

      if (e.keyCode === 27) {
        if (this.textareaFillCancelled !== true) {
          this.textareaFillCancelled = true;
        }
      } else if (e.keyCode === 9) {
        if (
          this.textareaFillCancelled !== true &&
          this.textareaShadowText.length > 0
        ) {
          stopAndPrevent(e);
          this.comments =
            (typeof this.comments === "string" ? this.comments : "") +
            this.textareaShadowText;
        }
      } else if (this.textareaFillCancelled === true) {
        this.textareaFillCancelled = false;
      }
    }
  }
};
</script>

<style saas>
.adjustForm {
  width: 50vw;
}

@media screen and (max-width: 900px) {
  .adjustForm {
    width: 90%;
  }
}

@media screen and (max-width: 750px) {
  .adjustForm {
    width: 100%;
  }
}
</style>
