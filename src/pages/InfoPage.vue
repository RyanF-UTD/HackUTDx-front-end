<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="fname"
        label="Your first name *"
        hint="First legal name"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Please type a name',
          (val) => !/[^a-zA-Z]/.test(val) || 'Please type a name'
        ]"
      />

      <q-input
        filled
        v-model="lname"
        label="Your last name *"
        hint="Last legal name"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Please type a name',
          (val) => !/[^a-zA-Z]/.test(val) || 'Please type a name'
        ]"
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

      <q-input
        filled
        v-model="address1"
        label="Address line 1 *"
        hint="Street address"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Please type in a street address'
        ]"
      />

      <q-input
        filled
        v-model="address2"
        label="Address line 2"
        hint="Street address"
        lazy-rules
      />

      <q-input
        filled
        v-model="addresscity"
        label="City *"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Please type in a city name'
        ]"
      />

      <q-input
        filled
        v-model="addressstate"
        label="State *"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Please type in a US state',
          (val) =>
            /^([Aa][EeLlKkSsZzRr])|([Cc][AaOoTt])|([Dd][EeCc])|([Ff][MmLl])|([Gg][AaUu])|([Hh][Ii])|([Ii][DdLlNnAa])|([Kk][SsYy])|([Ll][Aa])|([Mm][EeHhDdAaIiNnSsOoTt])|([Nn][EeVvHhJjMmYyCcDd])|([Mm][Pp])|([Oo][HhKkRr])|([Pp][WwAaRr])|([Rr][Ii])|([Ss][CcDd])|([Tt][NnXx])|([Uu][Tt])|([Vv][TtIiAa])|([Ww][AaVvIiYy])$/.test(
              val
            ) || 'Please type in a US state'
        ]"
      />

      <q-input
        filled
        type="number"
        v-model="addresszip"
        label="Zip code *"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Please type a zip code',
          (val) => /^\d{5}$/.test(val) || 'Please type a valid zip code'
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
    const address1 = ref(null);
    const address2 = ref(null);
    const addresscity = ref(null);
    const addressstate = ref(null);
    const addresszip = ref(null);
    const accept = ref(false);

    return {
      fname,
      lname,
      age,
      address1,
      address2,
      addresscity,
      addressstate,
      addresszip,
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
