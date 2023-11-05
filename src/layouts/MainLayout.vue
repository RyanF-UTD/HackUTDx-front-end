<template>

  
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>


        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar><template>
  <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <q-card flat bordered v-for="type in skeletonTypes" :key="type" style="width: 250px">
        <q-card-section>
          <div class="text-caption">"{{ type }}"</div>
        </q-card-section>

        <q-separator />

        <q-card-section>
          <q-skeleton :type="type" />
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { useRoute } from "vue-router";
import { auth } from "src/boot/firebase";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const route = useRoute();
    //const user = auth.currentUser.getIdToken();
    const user = "7JB97xh27bcoUHD5ENEtWseN7eP2";

    const goto = (path) => {
      route.path = path;
    };

    auth.onAuthStateChanged((u) => {
      console.log("authstate changed: ", u);
      //prompt user to login if authentication fails
      if (!u) {
        console.log("sending u to login");
        //route.replace("/auth");
      }
    });

    return {
      leftDrawerOpen,
      goto,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      linksList: [
        {
          title: "Home",
          caption: "",
          icon: "home",
          link: "/",
        },
        {
          title: "DB Example page",
          caption: "look here for DB examples",
          icon: "warning",
          link: "/Example",
        },
        {
          title: "Marketplace",
          caption: "buy and sell shares in realestate",
          icon: "market",
          link: "/Index",
        },
        {
          title: "Portfolio",
          caption: "",
          icon: "gear",
          link: `/profile/${user}`,
        },
        {
          title: "Settings",
          caption: "",
          icon: "gear",
          link: `/profile/${user}/settings`,
        },
      ],
    };
  },
});
</script>
