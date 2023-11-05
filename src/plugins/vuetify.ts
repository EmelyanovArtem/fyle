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
  // theme: {
  //   themes: {
  //     light: {
  //       colors: {
  //         primary: '#1867C0',
  //         secondary: '#5CBBF6',
  //       },
  //     },
  //   },
  // },
  theme: {
    defaultTheme: 'dark',
  }
})

// export default createVuetify({
//   theme: {
//     defaultTheme: 'myCustomTheme',
//     themes: {
//       myCustomTheme: {
//         dark: true,
//         colors: {
//           background: 'linear-gradient(320deg, #000000, #8057a8)',
//           something: '#00ff00',
//         },
//       },
//     },
//   },
// })

// const myCustomLightTheme: ThemeDefinition = {
//   dark: false,
//   colors: {
//     background: 'linear-gradient(320deg, #000000, #8057a8)',
//     surface: '#FFFFFF',
//     primary: '#6200EE',
//     'primary-darken-1': '#3700B3',
//     secondary: '#03DAC6',
//     'secondary-darken-1': '#018786',
//     error: '#B00020',
//     info: '#2196F3',
//     success: '#4CAF50',
//     warning: '#FB8C00',
//   },
// }

// export default createVuetify({
//   theme: {
//     defaultTheme: 'myCustomLightTheme',
//     themes: {
//       myCustomLightTheme,
//     },
//   },
// })
