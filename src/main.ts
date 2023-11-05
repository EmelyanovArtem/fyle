/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp, ref } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import { SocketBase } from './services/socketService'
import { guestRegAuth } from '@/services/guestRedAuth';

const app = createApp(App)

registerPlugins(app)

app.mount('#app')

export const socket = ref(new SocketBase());
guestRegAuth();