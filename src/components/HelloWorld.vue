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
            <!-- <v-col><router-link to="/login" class="text-h6">Вход</router-link></v-col> -->
            <!-- <v-col><router-link to="/register" class="text-h6">Регистрация</router-link></v-col> -->
            <v-dialog width="500">
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" text="Вход" class="mt-3 mr-5"></v-btn>
              </template>

              <template v-slot:default="{ isActive }">
                <v-card title="Вход">
                  <v-sheet width="300" class="mx-auto">
                    <v-form fast-fail @submit.prevent>
                      <v-text-field
                        label="Логин"
                      ></v-text-field>

                      <v-text-field
                        label="Пароль"
                      ></v-text-field>

                      <v-btn @click="" type="submit" block class="mt-2">Войти</v-btn>
                    </v-form>
                  </v-sheet>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                      text="Закрыть"
                      @click="isActive.value = false"
                    ></v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
            <v-dialog width="500">
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" text="Регистрация" class="mt-3"></v-btn>
              </template>

              <template v-slot:default="{ isActive }">
                <v-card title="Регистрация">
                  <v-sheet width="300" class="mx-auto">
                    <v-form fast-fail @submit.prevent>
                      <v-text-field
                        label="Логин"
                      ></v-text-field>

                      <v-text-field
                        label="Пароль"
                      ></v-text-field>

                      <v-btn @click="" type="submit" block class="mt-2">Зарегистрироваться</v-btn>
                    </v-form>
                  </v-sheet>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                      text="Закрыть"
                      @click="isActive.value = false"
                    ></v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-row>
        </v-col>
      </v-row>

      <v-img height="152" src="@/assets/logo.svg" class="mb-5 general-img" />

      <div class="text-h6 font-weight-medium mb-5">Загрузка файлов форматов (...), не больше N мегабайт, хранятся N дней.</div>
      <v-dialog width="500">
        <template v-slot:activator="{ props }">
          <!-- <v-btn v-bind="props" text="Загрузить" class="mt-3"></v-btn> -->
          <v-btn
          v-bind="props"
            color="primary"
            min-width="120"
            rel="noopener noreferrer"
            size="large"
            target="_blank"
            variant="flat"
          >
            Загрузить
            <v-icon
              icon="mdi-arrow-up-right"
              size="large"
            />
          </v-btn>
        </template>
        
        <template v-slot:default="{ isActive }">
            <v-card title="Выбор файлов">
              <v-sheet width="300" class="mx-auto">
                <v-form fast-fail @submit.prevent>
                  <v-file-input
                    label="Выберите файл"
                    accept=".pdf, .doc, .docx"
                  ></v-file-input>

                  <v-btn @click="" type="submit" block class="mt-2">Загрузить</v-btn>
                </v-form>
              </v-sheet>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  text="Закрыть"
                  @click="isActive.value = false"
                ></v-btn>
              </v-card-actions>
            </v-card>
        </template>
      </v-dialog>

      <div class="py-14" />

      <v-btn
        @click="aside = !aside"
        color="primary"
        min-width="120"
        rel="noopener noreferrer"
        size="default"
        target="_blank"
        variant="flat"
      > Показать все файлы
      </v-btn>
      <v-navigation-drawer width="900" class="pt-16 aside" v-model="aside" app>
        <v-btn
          @click="aside = false"
          class="mb-16"
          color="primary"
          size="small"
          >
          <v-icon
            icon="mdi-window-close"
            size="small"
          />
        </v-btn>
        <v-row class="d-flex align-left flex-column">
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
      </v-navigation-drawer>
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
      aside: false as boolean,
    }
  },
  created() {
    let lsGuestToken = localStorage.getItem('guestToken');
    let lsToken = localStorage.getItem('token');
    console.log(lsToken)

    if (lsToken !== null) {
      console.log('1111111')
      auth(lsToken);
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

.aside {
  text-align: right;
  padding: 50px;
}
</style>
