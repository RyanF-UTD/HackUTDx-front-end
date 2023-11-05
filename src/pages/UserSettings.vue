<template>
  <q-page class="flex flex-center"> User settings go here </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { db } from "src/boot/firebase";
import { collection, getDoc } from "firebase/firestore";

export default defineComponent({
  name: "UserSettings",
  setup() {
    return {};
  },
});
</script>
