<template>
  <h2>Child Component</h2>
  <h3>msg: {{ msg }}</h3>
  <button @click="update">update msg</button>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from "vue";
export default defineComponent({
  name: "ChildComponent",

  // life cycle functions of vue 2.x
  beforeCreate() {
    console.log("vue2 - beforeCreate()");
  },
  created() {
    console.log("vue2 - created()");
  },
  beforeMount() {
    console.log("vue2 - beforeMount()");
  },
  mounted() {
    console.log("vue2 - mounted()");
  },
  beforeUpdate() {
    console.log("vue2 - beforeUpdate()");
  },
  updated() {
    console.log("vue2 - updated()");
  },
  beforeUnmount() {
    console.log("vue2 - beforeUnmount()");
  },
  unmounted() {
    console.log("vue2 - unmounted()");
  },

  // life cycle hooks of vue 3.x
  setup() {
    console.log("vue3 - setup()");

    const msg = ref("Hello");
    const update = () => {
      msg.value += "!!";
    };

    onBeforeMount(() => {
      console.log("vue3 - onBeforeMount");
    });
    onMounted(() => {
      console.log("vue3 - onMounted");
    });
    onBeforeUpdate(() => {
      console.log("vue3 - onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("vue3 - onUpdated");
    });
    onBeforeUnmount(() => {
      console.log("vue3 - onBeforeUnmount");
    });
    onUnmounted(() => {
      console.log("vue3 - onUnmounted");
    });

    return {
      msg,
      update,
    };
  },
});
</script>
