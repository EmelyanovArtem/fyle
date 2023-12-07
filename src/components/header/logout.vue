<template>
  <div>
    <v-card>
      <h2 class="mt-5 user-name"  >{{ appStore.userData.login }}</h2>
      <v-btn @click="reloadPage()" 
        variant="text"
        color="white"
        size="x-large"
        text="Logout" 
        class="mt-3 text-none">
      </v-btn>
    </v-card>
  </div>
</template>

<script lang="ts">
import { useAppStore } from '@/store/app';
import { defineComponent } from 'vue';

setInterval(() => {
  if (useAppStore().auth) {
    console.log("Должно работать блеать сука")
  } else {
    console.log("Или не должно");
    console.log(useAppStore())
  }
}, 1000)

console.log(useAppStore());
export default defineComponent({
  data() {
      return{
        appStore: useAppStore()
      }
  },
  methods: {
    reloadPage() {
      window.location.reload();
    }
  },
})                                                                                                        
</script>

<style scoped>
.user-name {
  font-weight: 400;
}
</style>