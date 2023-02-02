<template>
  <div class="home">
    <p>P5 Testing</p>
    <div ref="p5Container"></div>
  </div>
</template>

<script>
import P5 from "p5";
import { onMounted, ref } from "vue";

export default {
  name: "HomeView",
  setup() {
    let p5Container = ref(null);
    const script = function (p5) {
      // NOTE: Set up is here
      p5.setup = () => {
        p5.createCanvas(500, 500);
      };
      // NOTE: Draw is here
      p5.draw = () => {
        p5.background(0);
      };
    };

    onMounted(() => {
      new P5(script, p5Container.value);
    });

    return { p5Container };
  },
};
</script>
