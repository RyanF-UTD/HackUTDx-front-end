<template>
  <q-page class="flex flex-center"> view houses you can buy shares in </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { db } from "src/boot/firebase";
import { collection, getDoc } from "firebase/firestore";

export default defineComponent({
  name: "SharesIndex",
  setup() {
    return {};
  },
});
</script>
