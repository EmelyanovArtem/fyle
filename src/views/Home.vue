<template>
  <v-container fluid class="">
    <v-responsive class="align-center text-center">
      <Header />
      <HelloWorld />
    </v-responsive>
  </v-container>
  
</template>

<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/header/header.vue';
</script>
