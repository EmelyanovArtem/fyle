<template>
  <v-container fluid class="">
    <v-responsive class="align-center text-center">
      <h1>{{ currentToken }}</h1>
      <v-row class="d-flex align-center justify-space-around mb-16">
        <v-col cols="auto">
        </v-col>
        <v-col cols="auto">
          <v-row>
            <h2 class="mt-5 mr-5 user-name"  v-if="authToggle">{{ userData.login }}</h2>
            <v-btn @click="reloadPage()" 
            variant="text"
            color="white"
            size="x-large"
            v-if="authToggle" 
            text="Logout" 
            class="mt-3 text-none">
          </v-btn>
          <v-dialog v-if="!authToggle" width="500">
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
                        v-model="userData.login"
                        label="Login"
                        size=""
                        :rules="inputRules"
                        required
                      ></v-text-field>
                      <v-text-field 
                      class="inputs"
                        bg-color="inputs" 
                        v-model="userData.password"
                        label="Password"
                        size=""
                        :rules="inputRules"
                      ></v-text-field>
                      <v-btn @click="registerAuth(userData, auth)" 
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
            <v-dialog v-if="!authToggle" width="500">
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
                  <v-sheet width="300" class="mx-auto">
                    <v-form  fast-fail @submit.prevent>
                      <v-text-field 
                        class="inputs"
                        color="white" 
                        bg-color="inputs" 
                        v-model="userData.login"
                        label="Login"
                        size=""
                        :rules="inputRules"
                        required
                      ></v-text-field>
                      <v-text-field 
                      class="inputs"
                        bg-color="inputs" 
                        v-model="userData.password"
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
                      <v-btn @click="registerAuth(userData, register)" 
                        :disabled="checkRulesPasswordReg"
                        color="secondary" 
                        type="submit" 
                        block 
                        size="large"
                        class="mb-3 text-none">Enter
                      </v-btn>
                      <v-checkbox
                      color="#20B5F1"
                      v-model="rules">
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
                    </v-form>
                  </v-sheet>
                </v-card>
              </template>
            </v-dialog>
          </v-row>
        </v-col>
      </v-row>

      <v-img height="152" src="@/assets/logo.svg" class="mb-5 general-img" />

      <div class="text-wrapper">
        <v-dialog width="500">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              color="primary"
              rel="noopener noreferrer"
              class="text-none upload-btn mb-1"
              rounded="xl"  
              density="default"
              size="x-large"
            >
              Upload file
            </v-btn>
          </template>          
          <template v-slot:default="{ isActive }">
              <v-card>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    @click="isActive.value = false"
                  > <v-icon icon="mdi-window-close"></v-icon>
                </v-btn>
                </v-card-actions>
                <v-sheet width="300" class="mx-auto">
                  <v-form align="center" class="pb-5" fast-fail @submit.prevent>                   
                    <v-file-input
                      label="Выберите файл"
                      bg-color="primary"
                      v-model="selectedFile"
                    ></v-file-input>
                    <v-btn @click="loadFile(selectedFile[0])" 
                        color="secondary" 
                        type="submit" 
                        block 
                        size="x-large"
                        class="mb-6 text-none">Upload
                    </v-btn>
                    <v-icon v-if="succesToggle" size="x-large"  color="succes" icon="mdi-check-circle-outline"></v-icon>
                  </v-form>
                </v-sheet>
                <div v-if="loaderToggle" class="loaderWrapper text-center">
                  <span class="loader"></span>
                  <p>{{ progressBar }}%</p>
                </div>
              </v-card>
          </template>
        </v-dialog>
        <p class="font-weight-normal mb-5 desc">
          Exchange files of any format and size.
        </p>
      </div>  

      <div class="py-14" />
      <v-btn
        @click="aside = !aside"
        color="primary"
        min-width="120"
        rel="noopener noreferrer"
        size="default"
        target="_blank"
        variant="flat"
        class="text-none"
      > Show all files
      </v-btn>
      <v-navigation-drawer width="450" class="pt-16 aside" v-model="aside" app>
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
          <v-col>
            <v-row class="d-flex justify-space-between">
              <v-col class="file-wrapper"><p>name.file</p> <p class="href">https://...44444444444444444444444444444444444443433333333333333333333333333333333333333333333333333333333333333333333333</p></v-col>
              <v-col >
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
          <v-col>
            <v-row class="d-flex justify-space-between">
              <v-col class="file-wrapper"><p>name.file</p> <p class="href">https://...</p></v-col>
              <v-col >
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
      </v-navigation-drawer>
    </v-responsive>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { register } from "@/services/userRegAuth";
import { auth } from "@/services/userRegAuth";
import { IUserPayload } from '@/interfaces.dto';
import { socket } from '@/main';
import { ref } from 'vue';

export default defineComponent({
  data() {
    const valid = ref(false);

    return {
      currentToken: '',
      aside: false,
      userData: {
        login: '',
        password: '',
      } as IUserPayload,
      repeatedPassword: '' as string,
      disabledBtn: true,

      selectedFile: null,
      socket,
      loaderToggle: false,
      succesToggle: false,
      authToggle: false,
      rules: false,
 
      progressBar: 0,

      auth: auth,
      register: register,
      valid,
      errorMessage: '',
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
      if (this.userData.password === this.repeatedPassword 
      && this.rules 
      &&(this.userData.password !== ''
      || this.userData.login !== '')) {
        return false
      } else {
        return true
      }
    },
    checkRulesPasswordAuth() {
      if (this.userData.login !== "" && this.userData.password !== "") {
        console.log(this.userData.login)
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    async registerAuth(userData: IUserPayload, method: any) {
      if (this.valid) {
         const responce: any = await method(userData); 

         this.authToggle = responce.success; 
         this.errorMessage = responce.message;

         this.valid = false;
      }
    },

    // Загрузка файла, прогрессбар
    async loadFile(fyle: File) {
      await this.socket.loadFile(fyle);
      this.succesToggle = false;
      this.loaderToggle = true;

      let blocks = await this.socket.uploadBlock((uploadedBlocks) => {
        this.progressBar = (100 / blocks) * uploadedBlocks ;

        if (this.progressBar === 100) {
          this.succesToggle = true;
          this.loaderToggle = false;
          this.progressBar = 0;
        } 
      });
    },

    reloadPage() {
      window.location.reload();
    },

    checkRulesPassword() {
      if (this.userData.password === this.repeatedPassword && this.rules) {
        this.disabledBtn = true;
      }
    }
  }
})
</script>

<style>
*{
  font-family:  Tahoma, Geneva, Verdana, sans-serif;
}

.btn {
  text-transform: lowercase;
}

.v-input__details > .v-icon, .v-input__prepend > .v-icon, .v-input__append > .v-icon {
  color: #8D8888;
}

.user-name {
  color: white ;
}

.upload-btn {
  padding: 0 50px !important;
  font-size: 24px !important;
  font-weight: 600 !important;
}

p {
  color: white;
}
a {
  color: white;
}

.general-img {
  fill: white;
}

.aside {
  text-align: right;
  padding: 50px;
}

.href {
  color: grey;
  font-size: 12px;
  overflow: visible;
  word-wrap:break-word;
  white-space:normal;
}

.file-wrapper {
  text-align: left;
  overflow: visible;
}

.text-wrapper {
  width: 250px;
  margin: 0 auto;
}

.desc {
  text-align: left;
  padding: 10px;
}

.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #D1D1D1;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  margin: 15px auto 0 auto;
}

.error {
  color: #DE4444
}

.inputs {
  padding: 0 !important;
}

@keyframes rotation {
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
} 
</style>
