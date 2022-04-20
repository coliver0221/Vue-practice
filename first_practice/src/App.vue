<template>
  <!-- original code -->
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->

  <SetupAndRefPractice />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from './components/HelloWorld.vue';
import SetupAndRefPractice from './components/SetupAndRefPractice.vue';

export default defineComponent({
  name: 'App',
  components: {
    // original component
    // HelloWorld
    SetupAndRefPractice
  }
});
</script>

<style>
/* original style for HelloWorld.vue */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
