<template>
  <h2>customized hooks</h2>
  <h3>x: {{ x }}</h3>
  <h3>y: {{ y }}</h3>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useMounsePosiotion from "./hooks/useMousePosition";

export default defineComponent({
  name: "App",

  setup() {
    const { x, y } = useMounsePosiotion();
    return {
      x,
      y,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
