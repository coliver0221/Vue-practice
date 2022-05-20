<template>
  <div class="about">
    <h1>This is about page</h1>
    <BarChart />
  </div>
</template>

<script>
import BarChart from "../components/BarChart";

export default {
  setup() {
    const dataset = [];
    return { dataset };
  },
  components: {
    BarChart,
  },
};
</script>

<style></style>
