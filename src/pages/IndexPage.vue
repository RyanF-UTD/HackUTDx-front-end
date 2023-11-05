<template>
  <div class="q-pa-md">
    <q-parallax src="src/assets/elevate-nYgy58eb9aw-unsplash.jpg"> </q-parallax>
  </div>

  <!--this is the slidy thingy with the tent-->
  <!--
Forked from:
https://quasar.dev/vue-components/carousel#example--transitions-bottom-navigation-arrows-and-auto-padding
-->

  <div id="q-app" style="min-height: 20vh">
    <div class="q-pa-md">
      <div class="q-gutter-md">
        <q-carousel
          v-model="slide"
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          control-color="white"
          navigation
          padding
          arrows
          height="400px"
          class="bg-primary text-white shadow-1 rounded-borders"
        >
          <q-carousel-slide name="style" class="column no-wrap flex-center">
            <q-icon name="style" size="56px"></q-icon>
            <div class="q-mt-md text-center">
              {{ lorem }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="tv" class="column no-wrap flex-center">
            <q-icon name="live_tv" size="56px"></q-icon>
            <div class="q-mt-md text-center">
              {{ lorem }}
            </div>

            <!--place insides of carousel here-->
          </q-carousel-slide>
          <q-carousel-slide name="layers" class="column no-wrap flex-center">
            <q-icon name="layers" size="56px"></q-icon>
            <div class="q-mt-md text-center">
              {{ lorem }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="map" class="column no-wrap flex-center">
            <q-icon name="terrain" size="56px"></q-icon>
            <div class="q-mt-md text-center">
              {{ lorem }}
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </div>

  <div class="q-pa-md row items-center justify-evenly justify-between q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-card-section>
        <div class="text-h6 q-mb-xs text-accent">Our Changing Planet</div>
        <div class="row no-wrap items-center">
          <q-rating size="18px" v-model="stars" :max="5" color="accent" />
          <span class="text-caption text-accent q-ml-sm">4.2 (551)</span>
        </div>
      </q-card-section>

      <img src="https://cdn.quasar.dev/img/mountains.jpg" />
    </q-card>
    <q-card class="my-card" flat bordered>
      <q-card-section>
        <div class="text-h6 q-mb-xs text-accent">Our Changing Planet</div>
        <div class="row no-wrap items-center">
          <q-rating size="18px" v-model="stars" :max="5" color="accent" />
          <span class="text-caption text-accent q-ml-sm">4.2 (551)</span>
        </div>
      </q-card-section>

      <img src="https://cdn.quasar.dev/img/mountains.jpg" />
    </q-card>
    <q-card class="my-card" flat bordered>
      <q-card-section>
        <div class="text-h6 q-mb-xs text-accent">Our Changing Planet</div>
        <div class="row no-wrap items-center">
          <q-rating size="18px" v-model="stars" :max="5" color="accent" />
          <span class="text-caption text-accent q-ml-sm">4.2 (551)</span>
        </div>
      </q-card-section>

      <img src="https://cdn.quasar.dev/img/mountains.jpg" />
    </q-card>
  </div>
</template>

<!-- this is how to commment-->
<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
      stars: ref(4),
    };
  },
};
</script>

<style>
.q-parallax-media {
  height: 100vh;
  min-height: 200x;
  max-height: 400px;
}

.my-card {
  width: 79%;
  max-width: 300px;
}
</style>
