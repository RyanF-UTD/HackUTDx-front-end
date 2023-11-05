<template>
  <q-page class="flex flex-center"> view houses yyou own shares in </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { db } from "src/boot/firebase";
import { collection } from "firebase/firestore";
import { useCollection } from "vuefire";

export default defineComponent({
  name: "UserPortfolio",
  setup() {
    return {};
  },
});
</script>
