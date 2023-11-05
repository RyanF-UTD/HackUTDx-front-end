<template>
  <q-page class="flex flex-center">
    pops up when you buy or sell a share
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "TransactionModal",
  setup() {
    const completeTransaction = async () => {
      return await axios.get("ENDPOINT", {
        params: {
          stuff: "",
        },
      });
      return {};
    };
  },
});
</script>
