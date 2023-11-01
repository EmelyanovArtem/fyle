<template>
  <v-container fluid class="">
    <v-responsive class="align-center text-center">
      <h1>{{ currentToken }}</h1>
      <v-row class="d-flex align-center justify-space-around mb-16">
        <v-col cols="auto">
          <router-link to="/" class="text-h6 font-weight-medium" href="#">Fyle</router-link>
        </v-col>
        <v-col cols="auto">
          <v-row>
            <v-col><router-link to="/login" class="text-h6">Вход</router-link></v-col>
            <v-col><router-link to="/register" class="text-h6">Регистрация</router-link></v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-img height="152" src="@/assets/logo.svg" class="mb-5 general-img" />

      <div class="text-h6 font-weight-medium mb-5">Загрузка файлов форматов (...), не больше N мегабайт, хранятся N дней.</div>
      <v-btn
        color="primary"
        href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides"
        min-width="120"
        rel="noopener noreferrer"
        size="x-large"
        target="_blank"
        variant="flat"
      >
        Загрузить
        <v-icon
          icon="mdi-arrow-up-right"
          size="large"
        />
      </v-btn>


      <div class="py-14" />

      <p class="text-body-1 mb-5">Ваши файлы:</p>

      <v-row class="d-flex align-center flex-column">
        <v-col cols="auto">
          <v-row class="d-flex justify-space-between">
            <v-col cols="auto"><p>name.file - https://...</p></v-col>
            <v-col cols="auto">
              <v-btn
                color="primary"
                href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides"
                min-width="120"
                rel="noopener noreferrer"
                size="small"
                target="_blank"
                variant="flat"
              >
               Скачать
               <v-icon
                  icon="mdi-arrow-down-right"
                  size="large"
                />
              </v-btn>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="auto">
          <v-row class="d-flex justify-space-between">
            <v-col cols="auto"><p>name.file - https://...</p></v-col>
            <v-col cols="auto">
              <v-btn
                color="primary"
                href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides"
                min-width="120"
                rel="noopener noreferrer"
                size="small"
                target="_blank"
                variant="flat"
              >
               Скачать
               <v-icon
                  icon="mdi-arrow-down-right"
                  size="large"
                />
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { io } from "socket.io-client";
import {guestRegister, guestAuth, auth} from '../sockets/socket';

export default defineComponent({
  data() {
    return {
      currentToken: '' as string,
    }
  },
  created() {
    let lsGuestToken = localStorage.getItem('guestToken');
    let lsToken = JSON.parse(localStorage.getItem('token'));
    console.log(lsToken)

    if (lsToken !== null) {
      console.log('1111111')
      auth(lsToken.session.token);
    } else if(lsGuestToken === null) {
      lsGuestToken = '';
      guestRegister();
    }
    else {
      lsGuestToken = lsGuestToken as string;
      guestAuth(lsGuestToken);
    }
  },
})
</script>

<style>
a {
  color: white;
  text-decoration: none;
}

.general-img {
  fill: white;
}
</style>
