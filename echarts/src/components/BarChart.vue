<template>
  <div id="myBarChart" ref="barChartContainer"></div>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";
import * as echarts from "echarts";

const generateSeries = (dataset) => {
  // TODO: deal with the dataset

  const series = [];

  return series;
};

export default {
  setup(props) {
    const barChartContainer = ref(null);

    const drawChart = (barChart) => {
      // const series = generateSeries(props.dataset);
      // console.log(series);
      // const option = {
      //   tooltip: {
      //     trigger: "item",
      //   },
      //   legend: {
      //     left: "center",
      //   },
      //   series: series,
      // };
      // option && barChart.setOption(option);
    };

    onMounted(() => {
      // let barChart = echarts.init(barChartContainer.value);
      // drawChart(barChart);
      // window.onresize = function () {
      //   barChart.resize();
      // };
    });

    onUnmounted(() => {
      // window.onresize = null;
    });

    return {
      /*barChartContainer, drawChart*/
    };
  },
  props: {
    dataset: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
#myBarChart {
  height: 500px;
}
</style>
