<template>
  <h2>Parent Component</h2>
  <button @click="isShow = !isShow">切換顯示</button>
  <hr />
  <!-- make child component disappear to check effect of 'destory' -->
  <Child v-if="isShow" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Child from "./components/Child.vue";

export default defineComponent({
  name: "App",
  components: {
    Child,
  },
  setup() {
    const isShow = ref(true);

    return {
      isShow,
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
