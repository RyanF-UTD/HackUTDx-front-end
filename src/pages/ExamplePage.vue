<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
    {{ Valuations }}
    <q-btn flat dense round icon="warning" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { db } from "src/boot/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useCollection, doc } from "vuefire";

export default defineComponent({
  name: "ExamplePage",
  setup() {
    const ValuationsRef = collection(db, "Valuations");
    const Valuations = useCollection(ValuationsRef);

    //example accessing id of a doc
    //doc(collection(db, 'users'), 'jORwjIykFn1NmkdzTkhU').id // 'jORwjIykFn1NmkdzTkhU'
    return { Valuations };
  },
});
</script>
