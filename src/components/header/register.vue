<template>
<div>
<v-dialog  width="500">
    <template v-slot:activator="{ props }">
      <v-btn size="x-large" variant="text" color="white"  v-bind="props" class="mt-3 text-none">Registration</v-btn>
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
        <v-sheet v-if="!appStore.register" width="300" class="mx-auto">
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
            <v-text-field 
            class="inputs"
              bg-color="inputs" 
              v-model="repeatedPassword"
              label="Repeat password"
              size=""
              :rules="inputRules"
            ></v-text-field>
            <v-btn @click="registerAuth(appStore.userData, register)" 
              :disabled="checkRulesPasswordReg"
              color="secondary" 
              type="submit" 
              block 
              size="large"
              class="mb-3 text-none">Enter
            </v-btn>
            <v-checkbox
            color="#20B5F1"
            v-model="rulesCheckbox">
              <template v-slot:label>
                <p>
                  Соглашаюсь с 
                  <v-tooltip location="bottom">
                    <template v-slot:activator="{ props }">
                      <a
                        target="_blank"
                        href="https://vuetifyjs.com"
                        v-bind="props"
                        @click.stop
                      >
                        условиями передачи данных
                      </a>
                    </template>
                    Ознакомиться с условиями
                  </v-tooltip>
                </p>
              </template>
            </v-checkbox>
            <v-card-text class="text-center error">{{ errorMessage }}</v-card-text>
          </v-form>
        </v-sheet>
        <v-sheet class="text-center" v-if="appStore.register">
          <p color="white descr" class="pb-5">Registration was successful. Please log in</p>
        </v-sheet>
      </v-card>
    </template>
  </v-dialog>
</div>
</template>

<script lang="ts">
import { register } from '@/services/userRegAuth';
import { defineComponent, ref } from 'vue';
import { registerAuth } from '.';
import { useAppStore } from '@/store/app';

export default defineComponent({
  data() {
    const valid = ref(false);

    return {
      authToggle: false,

      register: register,
      registerAuth: registerAuth,

      appStore: useAppStore(),

      isActive: false,

      repeatedPassword: '',
      rulesCheckbox: false,
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

  computed: {
    checkRulesPasswordReg() {
      if (this.appStore.userData.password === this.repeatedPassword 
      && this.rulesCheckbox 
      &&(this.appStore.userData.password !== ''
      || this.appStore.userData.login !== '')) {
        return false
      } else {
        return true
      }
    },
  }
})
</script>

<style scoped>
.primary {
  color: #8D8888;
}

.descr {
  font-size: 20px;
}
</style>