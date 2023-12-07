<template>
  <header>
    <v-row class="d-flex align-center justify-space-around mb-16">
      <v-col cols="auto">
      </v-col>
      <v-col cols="auto">
        <v-row>
          <Logout v-if="appStore.auth" />
          <Login v-if="!appStore.auth" />
          <Register v-if="!appStore.auth" />
        </v-row>
      </v-col>
    </v-row>  
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Login from './login.vue';
import Register from './register.vue';
import Logout from './logout.vue';
import { useAppStore } from '@/store/app';

export default defineComponent({
  components: {
    Login,
    Register,
    Logout,
  },

  data() {
    return {
      appStore: useAppStore()   
    }
     
  },
})
</script>