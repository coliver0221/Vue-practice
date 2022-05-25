<template>
  <div class="home">
    <!-- <h1>This is home page</h1> -->
    <PieChart :dataset="dataset" />
  </div>
</template>

<script>
import PieChart from "../components/PieChart";

export default {
  setup() {
    const dataset = [
      {
        type: "安全信",
        count: 162976,
      },
      {
        type: "釣魚信",
        count: 55874,
      },
      {
        type: "勒索病毒",
        count: 39577,
      },
      {
        type: "BEC",
        count: 11638,
      },
      {
        type: "垃圾信",
        count: 6986,
      },
      {
        type: "勒索信",
        count: 1746,
      },
      {
        type: "灰色信件",
        count: 582,
      },
      {
        type: "可疑信件",
        count: 103,
      },
    ];
    return { dataset };
  },
  components: {
    PieChart,
  },
};
</script>

<style lang="scss" scoped></style>
