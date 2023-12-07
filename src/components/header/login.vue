<template>
  <div>
    <v-dialog width="500">
        <template v-slot:activator="{ props }">
          <v-btn size="x-large" variant="text" color="white"  v-bind="props" class="mt-3 text-none">Login</v-btn>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                @click="isActive.value = false"
              >
              <v-icon icon="mdi-window-close"></v-icon>
            </v-btn>
            </v-card-actions>
            <v-sheet width="300" class="mx-auto">
              <v-form  fast-fail @submit.prevent>
                <v-text-field 
                  class="inputs"
                  color="white" 
                  bg-color="inputs" 
                  v-model="appStore.userData.login"
                  label="Login"
                  size=""
                  :rules="inputRules"
                  required
                ></v-text-field>
                <v-text-field 
                class="inputs"
                  bg-color="inputs" 
                  v-model="appStore.userData.password"
                  label="Password"
                  size=""
                  :rules="inputRules"
                ></v-text-field>
                <v-btn @click="registerAuth(appStore.userData, auth)" 
                  :disabled="checkRulesPasswordAuth"
                  color="secondary" 
                  type="submit" 
                  block 
                  size="large"
                  class="mb-3 text-none">Enter
                </v-btn>
                <v-card-text class="text-center error">{{ errorMessage }}</v-card-text>
              </v-form>
              
            </v-sheet>
          </v-card>
        </template>
      </v-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { registerAuth } from './index';
import { auth } from "@/services/userRegAuth";
import { useAppStore } from '@/store/app';

console.log(useAppStore());
export default defineComponent({
  data() {
    const valid = ref(false);

    return {
      authToggle: false,

      auth: auth,
      registerAuth: registerAuth,

      appStore: useAppStore(),

      errorMessage: '',
      valid,
      inputRules: [
        (value: string) => {
          if (value) {      
            valid.value = true; 
            return true
          }
          return 'This field is required'
        },
      ]
    }
  },

  methods: {
    reloadPage() {
      window.location.reload();
    },
  },

  computed: {
    checkRulesPasswordAuth() {
      if (this.appStore.userData.login !== "" && this.appStore.userData.password !== "") {
        console.log(this.appStore.userData.login)
        return false;
      } else {
        return true;
      }
    }
  }
})
</script>