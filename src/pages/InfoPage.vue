<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="fname"
        label="Your first name *"
        hint="First legal name"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        v-model="lname"
        label="Your last name *"
        hint="Last legal name"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        type="number"
        v-model="age"
        label="Your age *"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Please type your age',
          (val) => (val > 0 && val < 150) || 'Please type a real age'
        ]"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
import { ref } from "vue";

export default defineComponent({
  name: "InfoPage",
  setup() {
    const $q = useQuasar();

    const fname = ref(null);
    const lname = ref(null);
    const age = ref(null);
    const accept = ref(false);

    return {
      fname,
      lname,
      age,
      accept,

      onSubmit() {
        $q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted"
        });
      },

      onReset() {
        fname.value = null;
        lname.value = null;
        age.value = null;
      }
    };
  }
});
</script>
