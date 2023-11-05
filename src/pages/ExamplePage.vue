<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
    {{ Valuations }}
    <q-btn flat dense round icon="warning" @click="getData" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { db } from "src/boot/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useCollection } from "vuefire";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const ValuationsRef = collection(db, "Valuations");
    const Valuations = useCollection(ValuationsRef);

    //example accessing all docs in a collection
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, "Valuations"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    };
    return { Valuations, getData };
  },
});
</script>
