<template>
  <q-item>
    <q-item avatar>
      <q-icon
        name="material-symbols-park"
        size="64px"
        class="row justify-center"
      />
    </q-item>
    <q-item>Sharewood</q-item>
  </q-item>
  <q-card class="row justify-center q-pa-md">
    <div class="q-pa-md" style="max-width: 600px">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="email"
          label="Email *"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'please type an email']"
        />

        <q-input
          filled
          v-model="password"
          label="Password *"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'please type a password'
          ]"
        />

        <div>
          <q-btn label="Submit" type="submit" color="primary" to="/" />
        </div>
      </q-form>
    </div>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
import { ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "LoginPage",
  setup() {
    const $q = useQuasar();
    const route = useRoute();
    const email = ref(null);
    const password = ref(null);

    return {
      email,
      password,
      onSubmit() {}
    };
  }
});
</script>
