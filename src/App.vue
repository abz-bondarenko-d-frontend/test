<template>
  <v-app id="app">
    <home msg="Welcome to Your Vue.js App"/>
  </v-app>
</template>

<script>
import Home from './components/Home.vue';

export default {
  name: 'App',
  components: {
    Home,
  },
};
</script>

<style lang="scss">
</style>
