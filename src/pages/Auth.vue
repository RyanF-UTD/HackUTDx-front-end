<template>
  <q-page class="flex flex-center"> Login </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { db, auth } from "src/boot/firebase";
import { getDoc } from "firebase/firestore";

export default defineComponent({
  name: "LoginPage",
  setup() {
    auth.onAuthStateChanged(async () => {
      getDoc(db);
    });
    return {};
  },
});
</script>
