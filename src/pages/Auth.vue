<template>
  Login <q-btn icon="login" title="Log in with google" @click="signIn" />
</template>

<script>
import { defineComponent } from "vue";
import { db, auth } from "src/boot/firebase";
import { getDoc } from "firebase/firestore";
import {
  GoogleAuthProvider,
  linkWithRedirect,
  getRedirectResult,
} from "firebase/auth";

export default defineComponent({
  name: "LoginPage",
  setup() {
    const googleProvider = new GoogleAuthProvider();
    const signIn = () => {
      linkWithRedirect(auth.currentUser, googleProvider);
    };

    getRedirectResult(auth)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          // Accounts successfully linked.
          console.log(result.user);
          // ...
        }
      })
      .catch((error) => {
        // Handle Errors here.
        // ...
      });

    auth.onAuthStateChanged(async (u) => {
      //getDoc(db);
    });
    return { signIn };
  },
});
</script>
