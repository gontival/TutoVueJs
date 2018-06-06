<template>
  <div id="app">
    <v-app>
      <Header :user="userName" />
      <router-view/>
    </v-app>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  components: {
    Header
  },
  name: 'App',
  data() {
    return {
      userName: 'Joel Levant'
    };
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
