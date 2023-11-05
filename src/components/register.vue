<template>
  <v-container fluid class="">
    <v-responsive class="align-center text-center">

      <v-row class="d-flex align-center justify-space-around mb-16">
        <v-col cols="auto">
          <router-link to="/" class="text-h6 font-weight-medium" href="#">Fyle</router-link>
        </v-col>
        <v-col cols="auto">
          <v-row>
            <v-col><router-link to="/login" class="text-h6">Вход</router-link></v-col>
          </v-row>
        </v-col>
      </v-row>

      <h1 class="mb-5">Регистрация</h1>
      <!-- <v-img height="152" src="@/assets/logo.svg" class="mb-5 general-img" /> -->
      <!-- <template> -->
      <v-sheet width="300" class="mx-auto">
        <v-form fast-fail @submit.prevent>
          <v-text-field
            v-model="userRegisterData.login"
            label="Логин"
          ></v-text-field>

          <v-text-field
            v-model="userRegisterData.password"
            label="Пароль"
          ></v-text-field>

          <v-btn @click="registerUser" block class="mt-2">Зарегистрироваться</v-btn>
        </v-form>
      </v-sheet>
<!-- </template> -->


      <div class="py-14" />
    </v-responsive>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { register } from '../sockets/socket';
import { IUserPayload } from '@/interfaces.dot';

export default defineComponent({
  data() {
    return {
      userRegisterData: {
        login: '',
        password: '',
      } as IUserPayload,
    }
  },
  methods: {
    registerUser() {
      // register(this.userRegisterData);
    }
  }
})
</script>

<style>
a {
  color: white;
  text-decoration: none;
}
</style>