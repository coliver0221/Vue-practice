<template>
  <div class="funnel">
    <!-- <h1>This is page for funnel chart</h1> -->
    <FunnelChart :dataset="dataset" />
  </div>
</template>

<script>
import FunnelChart from "../components/FunnelChart";

export default {
  setup() {
    // create dataset
    const dataset = {
      total: 280094,
      filterByScan: 116499,
      filterByReport: 119,
      final: 163476,
    };
    // const dataset = {
    //   total: 100,
    //   filterByScan: 35,
    //   filterByReport: 10,
    //   final: 55,
    // };

    return { dataset };
  },
  components: {
    FunnelChart,
  },
};
</script>

<style scoped>
.funnel {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
