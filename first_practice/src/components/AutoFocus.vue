<template>
  <h2>用 ref 來獲取組件標籤並自動 focus</h2>
  <input type="text" ref="inputRef" />
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const inputRef = ref<HTMLElement | null>(null);

    onMounted(() => {
      // auto focus to input field when page rendered
      inputRef.value && inputRef.value.focus();
    });

    return {
      inputRef,
    };
  },
});
</script>