<template>
  <div class="q-pa-md">
    <q-parallax :height= "700" :speed="0.5">
      <template v-slot:media>
        <img src="https://github.com/RyanF-UTD/HackUTDx-front-end/blob/Courtney/LandingPage/src/assets/elevate-nYgy58eb9aw-unsplash.jpg">
      </template>

      <h1 class="text-white">helloooo</h1>
    </q-parallax>
  </div>


  <!--this is the slidy thingy with the tent-->
  <!--
Forked from:
https://quasar.dev/vue-components/carousel#example--transitions-bottom-navigation-arrows-and-auto-padding
-->
  <div id="q-app" style="min-height: 200vh">
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
</template>

<!-- this is how to commment-->
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",

});
</script>
