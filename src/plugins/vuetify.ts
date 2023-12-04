/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify, ThemeDefinition } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#8D8888',
          secondary: '#454444',
          surface: '#353434',
          error: '#DE4444',
          inputs: '#2B2B2B',
          disabled: '#565654',
          succes: '#4BB543',
          // onBackground: '#8D8888'
        },
      },
    },
  },
})
