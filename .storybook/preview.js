import Vue from 'vue';
import vuetify from '../src/plugins/vuetify';
import vuetifyConfig from '../src/plugins/vuetify.js'
import { VueMaskDirective } from 'v-mask';
import { withVuetify } from '@socheatsok78/storybook-addon-vuetify/dist/decorators'

Vue.directive('mask', VueMaskDirective);


new Vue({
  vuetify,
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// export const decorators = [() => ({
//   vuetify: vuetifyConfig,
//   template: '<v-app><v-main><story/></v-main></v-app>'
// })];

export const decorators = [
  withVuetify
]
