<template>
  <q-page class="flex">
    <div class="q-pa-md" style="max-width: 350px">
      <q-list
        bordered
		class="justify-left"
        separator
        v-for="share in filteredShares"
        :key="share.name"
      >
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label>{{ share.name }}</q-item-label>
            <q-item-label caption>{{ share.ammount }}</q-item-label>
            <q-item-section side top>
              <q-item-label>{{
                share.name * share.valuePerShare
              }}</q-item-label>
              <q-icon name="star" color="yellow" />
            </q-item-section>
          </q-item-section>
        </q-item>
      </q-list>
      <apexchart
        width="500"
        type="bar"
		class="row fixed-right"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </q-page>
</template>

<script>
import { api } from "src/boot/axios";
import { defineComponent, ref } from "vue";
import { db, auth } from "src/boot/firebase";
import {
  collection,
  getDoc,
  query,
  where,
  getDocs,
  doc
} from "firebase/firestore";
import { useCollection } from "vuefire";

export default defineComponent({
  name: "UserPortfolio",
  setup() {
    //const user = auth.currentUser.getIdToken();
    const user = "7JB97xh27bcoUHD5ENEtWseN7eP2";

    const sharesRef = query(
      collection(db, "shares"),
      where("ownerID", "==", user)
    );
    const filteredShares = ref([]);
    const textFilter = ref("");

    const valueShare = async () => {
      console.log("here");
      /*api
        .post("/")
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        }); */
      var url = "/value";
      var req = "hi";
      const options = {
        method: "POST",
        mode: "no-cors",
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:8000"
        },
        timeout: 2000000,
        data: { req },
        url: process.env.BASEURL + url
      };

      api(options);
    };
    valueShare();

    const loadShares = async () => {
      getDocs(sharesRef).then(async (querysnapshot) => {
        filteredShares.value = await Promise.all(
          querysnapshot.docs
            .map(async (sharedoc) => {
              var data = sharedoc.data();
              var propRef = doc(db, "properties", data.propertyID);
              var property = (await getDoc(propRef)).data();
              return {
                name: property.address,
                ammount: data.ammount
                // valuePerShare: await axios.post("/value", {
                //   propertyID: el.propertyID,
                // }),
              };
            })
            .filter((share) => {
              if (textFilter.value == "") {
                return true;
              } else if (textFilter.value != "") {
                if (share.name.toString().includes(textFilter.value)) {
                  return true;
                }
              }
              return false;
            })
        );
      });
    };

    //LOAD ON RENDER
    loadShares();
    return {
      loadShares,
      filteredShares,
      chartOptions: {
        chart: {
          id: "vuechart-example"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 35, 50, 49, 60, 70, 91]
        }
      ]
    };
  }
});
</script>
