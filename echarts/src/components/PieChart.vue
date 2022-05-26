<template>
  <div id="myPieChart" ref="pieChartContainer"></div>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";
import * as echarts from "echarts";
import { mailColorMap } from "../components/categories";

const generateSeries = (dataset) => {
  const data = dataset.map((d) => {
    return {
      name: d.type,
      value: d.count,
      itemStyle: {
        color: mailColorMap[d.type],
      },
    };
  });
  const totle = dataset.map((d) => d.count).reduce((prev, next) => prev + next);

  const series = [
    {
      type: "pie",
      name: "郵件類別",
      radius: ["50%", "70%"],
      label: {
        show: false,
      },
      markPoint: {
        tooltip: { show: false },
        label: {
          show: true,
          formatter: "{b}",
          color: "black",
          fontSize: 30,
          lineHeight: 30,
        },
        data: [
          {
            name: totle,
            value: "-",
            symbol: "circle",
            itemStyle: { color: "transparent" },
            x: "50%",
            y: "45%",
            // color: "#293845",
          },
          {
            name: "封寄內郵件",
            value: "-",
            symbol: "circle",
            itemStyle: { color: "transparent" },
            x: "50%",
            y: "55%",
            color: "#B3BCC4",
          },
        ],
      },
      data,
    },
  ];

  return series;
};

export default {
  setup(props) {
    const pieChartContainer = ref(null);

    const drawChart = (pieChart) => {
      const series = generateSeries(props.dataset);

      /** @type EChartsOption */
      const option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          left: "center",
          icon: "circle",
          itemHeight: 20,
          textStyle: {
            fontSize: 20,
          },
        },
        series: series,
      };

      option && pieChart.setOption(option);
    };

    onMounted(() => {
      let pieChart = echarts.init(pieChartContainer.value);
      drawChart(pieChart);

      window.onresize = function () {
        pieChart.resize();
      };
    });

    onUnmounted(() => {
      window.onresize = null;
    });

    return { pieChartContainer, drawChart };
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
#myPieChart {
  height: 500px;
}
</style>
