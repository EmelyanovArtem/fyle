<template>
  <v-container fluid class="">
    <v-responsive class="align-center text-center">

      <v-row class="d-flex align-center justify-space-around mb-16">
        <v-col cols="auto">
          <router-link to="/" class="text-h6 font-weight-medium" href="#">Fyle</router-link>
        </v-col>
        <v-col cols="auto">
          <v-row>
            <v-col><router-link to="/register" class="text-h6">Регистрация</router-link></v-col>
          </v-row>
        </v-col>
      </v-row>

      <h1 class="mb-5">Вход</h1>
      <!-- <v-img height="152" src="@/assets/logo.svg" class="mb-5 general-img" /> -->

      <!-- <div class="text-h6 desc  font-weight-medium mb-16">Регистрация на нашем сайте позволит Вам: Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis incidunt natus eaque velit rem, amet tempora aliquam, quis temporibus repudiandae, quas modi expedita cupiditate corporis eius odit illum sunt reiciendis.</div> -->
      <!-- <template> -->
      <v-sheet width="300" class="mx-auto">
        <v-form fast-fail @submit.prevent>
          <v-text-field
            v-model="userAuthData.login"
            label="Логин"
          ></v-text-field>

          <v-text-field
            v-model="userAuthData.password"
            label="Пароль"
          ></v-text-field>

          <v-btn @click="authUser()" type="submit" block class="mt-2">Войти</v-btn>
        </v-form>
      </v-sheet>
<!-- </template> -->


      <div class="py-14" />
    </v-responsive>
  </v-container>
</template>

<script lang="ts">
import { IUserPayload } from '@/interfaces.dto';
import { defineComponent } from 'vue';
// import { auth } from '../sockets/socket';

export default defineComponent({
  data() {
    return {
      userAuthData: {
        login: '',
        password: '',
        // token: ''
      } as IUserPayload,
    }
  },
  // created() {
  //   localStorage.removeItem('guestToken');
  // },
  methods: {
    authUser() {
      console.log(this.userAuthData)
      // auth(this.userAuthData);
      if (this.userAuthData.token) {
        console.log('token est', this.userAuthData.token)
      } else {
        console.log('net')
      }
    }
  }
})
</script>

<style>
a {
  color: white;
  text-decoration: none;
}

.desc {
  text-align: left;
}
</style>